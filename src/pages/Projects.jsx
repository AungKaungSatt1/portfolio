import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import Card from "../components/Card";
import data from "../data/projects.json";
import { CaretLeft, CaretRight, Translate } from "phosphor-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Projects() {
    const [item, setItem] = useState(1);
    const [lastItem, setLastItem] = useState(3);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data);
    }, [item, lastItem]);

    return (
        <div>
            <div className="h-[100vh] relative bg-linear-60 from-(--primary-color) to-(--secondary-color)">
                <div className="absolute top-0 bg-[rgb(250,250,252,0.1)] backdrop-blur-[3px] w-full h-full z-1"></div>

                <motion.span
                    className="absolute z-10 p-[5px] lg:p-[15px] md:p-[15px] sm:p-[10px] text-(--white) bg-(--dark-theme-translucent-color) backdrop-blur-[3px] border border-(--white) rounded-[50px] top-[40vh] lg:top-[40vh] md:top-[40vh] sm:top-[50vh] right-[0%] lg:right-[20%] md:right-[15%] sm:right-[0%] cursor-pointer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setItem(item >= 4 ? 1 : item + 1);
                        setLastItem(lastItem >= 4 ? 1 : lastItem + 1);
                    }}
                >
                    <CaretRight size="2em" />
                </motion.span>
                <div
                    className="flex items-center relative justify-center h-full"
                    style={{
                        flexDirection: item == 2 || item == 3 ? "row-reverse" : "row",
                    }}
                >
                    {projects.map((data) => {
                        if (data.id > 4) return false;
                        return (
                            <motion.div
                                className="cursor-pointer w-full lg:w-[40%] md:w-[50%] sm:w-full rounded-[15px] shadow-lg border border-(--white)"
                                initial={{ scale: 0 }}
                                animate={data.id != item ? { scale: 0.8 } : { scale: 1 }}
                                layout
                                key={data.id}
                                style={
                                    data.id == item
                                        ? {
                                              zIndex: 2,
                                              position: "absolute",
                                              top: "23%",
                                          }
                                        : {
                                              position: data.id == lastItem ? "absolute" : "",
                                              right: data.id == lastItem ? "center" : "",
                                              zIndex: data.id == lastItem ? -1 : 0,
                                          }
                                }
                            >
                                <div className="bg-linear-90 from-[#E9E9E9] to-(--secondary-color) p-[25px] rounded-[15px]">
                                    <img
                                        className="w-full rounded-[10px]"
                                        src={data.photo}
                                        alt={data.name}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                    <p className="block text-center absolute z-2 bottom-[15%] lg:bottom-[20%] md:bottom-[25%] sm:bottom-[8%] text-[1.3em] font-bold">
                        {projects.map((data) => {
                            return data.id == item ? data.name : "";
                        })}
                    </p>
                </div>
                <motion.span
                    className="absolute z-10 p-[5px] lg:p-[15px] md:p-[15px] sm:p-[10px] text-(--white) bg-(--dark-theme-translucent-color) backdrop-blur-[3px] border border-(--white) rounded-[50px] top-[40vh] lg:top-[40vh] md:top-[40vh] sm:top-[50vh] left-[0%] lg:left-[20%] md:left-[15%] sm:left-[0%] cursor-pointer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setItem(item <= 1 ? 4 : item - 1);
                        setLastItem(lastItem <= 1 ? 4 : lastItem - 1);
                    }}
                >
                    <CaretLeft size="2em" />
                </motion.span>
            </div>
            <div className="w-full mx-auto mb-[50px]">
                <h1 className="text-center lg:text-start lg:ms-[85px] font-bold text-[25px] lg:text-[40px] md:text-[40px] sm:text-[25px] my-[50px]">
                    My Best Creation <strong className="text-(--additional-color)">.</strong>
                </h1>
                <div className="flex flex-wrap justify-center md:justify-center sm:justify-center w-full">
                    {projects.map((data) => {
                        return <Card data={data} key={data.id} />;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
