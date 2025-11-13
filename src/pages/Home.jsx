import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import data from "../data/projects.json";
import skills from "../data/skills.json";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Code, CodesandboxLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Home() {
    let dashArray = ((80 - 10) / 2) * Math.PI * 2;
    let duration = 500;
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data);
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center gap-10 lg:pt-[50px] w-full h-[100vh] bg-linear-30 from-(--primary-color) to-(--secondary-color) flex-wrap">
                <div className="flex-col justify-center md:justify-center lg:w-[40%] md:w-[75%] sm:w-[75%]">
                    <span className="flex gap-2 lg:justify-start md:justify-center sm:justify-center justify-center">
                        <h2 className="text-[3em] font-bold">I AM</h2>
                        <h1 className="pixel bg-linear-30 text-transparent bg-clip-text from-(--additional-color) to-[#7962FF] text-[4em]/18 font-bold">
                            JAKE
                        </h1>
                    </span>
                    <div className="w-full flex justify-center lg:justify-start md:justify-cemter sm:justify-center">
                        <div className="inline-block my-[5px]">
                            <span className="type-writer bg-linear-30 text-transparent bg-clip-text from-(--additional-color) to-[#7962FF] lg:text-[50px] md:text-[50px] sm:text-[50px] text-[30px] font-bold">
                                A WEB DEVELOPER
                            </span>
                        </div>
                    </div>
                    <p className="lg:w-full md:w-full sm:w-full mb-[25px] lg:text-start md:text-center sm:text-center text-center">
                        I am a college student, looking for a part-time junior position job or a
                        part-time internship with flexible, corporative, and committed mind.
                    </p>
                    <div className="flex gap-5 lg:justify-start md:justify-center  sm:justify-center justify-center [&>*]:cursor-pointer [&>*]:transition-all [&>*]:ease-in-out [&>*]:duration-500">
                        <button className="bg-(--additional-color) text-(--white) px-[40px] py-[10px] rounded-[10px] hover:bg-(--secondary-color)">
                            Get In Touch
                        </button>
                        <button className="border border-(--dark-theme) text-(--dark-theme) px-[40px] py-[10px] rounded-[10px] hover:bg-(--dark-theme) hover:text-(--white)">
                            Projects
                        </button>
                    </div>
                </div>
                <motion.div
                    className="absolute float-center lg:right-[10%] md:right-[5%] sm:right-[3%] top-[10%] lg:top-[18%] md:top-[78%] sm:top-[78%] flex items-center w-[275px] shadow-lg px-[25px] py-[10px] lg:py-[15px] md:py-[15px] sm:py-[10px] scale-75 lg:scale-100 md:scale-100 sm:scale-75 rounded-[50px] bg-(--primary-color) h-[100px]"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    <svg className="h-[75px] w-[75px]" viewBox="0 0 80 80">
                        <circle
                            className="fill-none stroke-gray-200"
                            cx="40"
                            cy="40"
                            r={(80 - 10) / 2}
                            strokeWidth="10px"
                        />
                        <motion.circle
                            className="fill-none stroke-(--dark-theme)"
                            cx="40"
                            cy="40"
                            r={(80 - 10) / 2}
                            strokeWidth="10px"
                            strokeLinecap="round"
                            transform={`rotate(-90 ${80 / 2} ${80 / 2})`}
                            initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                            whileInView={{
                                strokeDasharray: dashArray,
                                strokeDashoffset: dashArray - (dashArray * 68) / 100,
                            }}
                            transition={{ duration: 1, scale: { visualDuration: 0.4 } }}
                        />
                        <text x="50%" y="50%" dy=".3em" textAnchor="middle">
                            68%
                        </text>
                    </svg>
                    <span className="w-[50%] text-center">
                        <Code className="mx-auto" size="2em" />
                        <p>FrontEnd</p>
                    </span>
                </motion.div>
                <motion.div
                    className="absolute float-center lg:left-[45%] md:left-[5%] sm:left-[3%] flex items-center w-[275px] shadow-lg px-[25px] rounded-[50px] bg-(--primary-color) py-[10px] lg:py-[15px] md:py-[15px] sm:py-[10px] bottom-[10%] scale-75 lg:top-[70%] md:top-[78%] sm:top-[78%] h-[100px] lg:scale-100 md:scale-100 sm:scale-75"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    <svg className="h-[75px] w-[75px]" viewBox="0 0 80 80">
                        <circle
                            className="fill-none stroke-gray-200"
                            cx="40"
                            cy="40"
                            r={(80 - 10) / 2}
                            strokeWidth="10px"
                        />
                        <motion.circle
                            className="fill-none stroke-(--dark-theme)"
                            cx="40"
                            cy="40"
                            r={(80 - 10) / 2}
                            strokeWidth="10px"
                            strokeLinecap="round"
                            transform={`rotate(-90 ${80 / 2} ${80 / 2})`}
                            initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                            whileInView={{
                                strokeDasharray: dashArray,
                                strokeDashoffset: dashArray - (dashArray * 80) / 100,
                            }}
                            transition={{ duration: 1, scale: { visualDuration: 0.4 } }}
                        />
                        <text x="50%" y="50%" dy=".3em" textAnchor="middle">
                            80%
                        </text>
                    </svg>
                    <span className="w-[50%] text-center">
                        <CodesandboxLogo className="mx-auto" size="2em" />
                        <p>Backend</p>
                    </span>
                </motion.div>
                <div className="hidden lg:block md:hidden sm:hidden">
                    <DotLottieReact
                        className="w-[80vh] h-[80vh]"
                        src="/portfolio/programming.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>
            <div className="w-full mx-auto mb-[50px]">
                <h1 className="text-center lg:text-start lg:ms-[85px] font-bold text-[25px] lg:text-[40px] md:text-[40px] sm:text-[25px] my-[50px]">
                    My Best Creation <strong className="text-(--additional-color)">.</strong>
                </h1>
                <div className="flex flex-wrap justify-center md:justify-center sm:justify-center w-full">
                    {projects.map((data) => {
                        if (data.id > 4) return false;
                        return <Card data={data} key={data.id} />;
                    })}
                </div>
                <Link
                    className="text-center block underline text-(--additional-color)"
                    to={"/projects"}
                >
                    See More
                </Link>
            </div>
            <div className="bg-(--secondary-color) text-(--white) flex flex-col py-[50px] mb-[50px]">
                <h1 className="text-center lg:text-start lg:ms-[65px] font-bold text-[25px] lg:text-[40px] md:text-[40px] sm:text-[25px] mb-[25px]">
                    Skill <strong className="text-(--additional-color)">.</strong>
                </h1>
                <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center w-[90%] lg:justify-between md:items-center sm:items-center mx-auto gap-3 [&>*]:lg:w-[370px] [&>*]:md:w-[50%] [&>*]:sm:w-[75%] [&>*]:w-full">
                    <div className="flex flex-col gap-5 flex-wrap">
                        <h3 className="text-[25px] font-bold">FrontEnd</h3>
                        <div className="flex flex-wrap justify-center bg-[rgb(3,7,30,0.5)] py-[15px] [&>*]:m-[20px] rounded-[15px]">
                            {skills.frontend.map((data) => {
                                return (
                                    <div
                                        className="w-[35%] flex justify-center items-center bg-(--dark-theme) rounded-[10px] py-[20px] flex-wrap"
                                        key={data.id}
                                        data-aos="fade-up"
                                        data-aos-duration={data.id % 2 ? duration : duration + 500}
                                    >
                                        <img
                                            loading="lazy"
                                            className="w-[60px]"
                                            src={data.icon}
                                            alt=""
                                        />
                                        <div className="w-full text-center mt-[10px]">
                                            {data.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 flex-wrap">
                        <h3 className="text-[25px] font-bold">BackEnd</h3>
                        <div className="flex flex-wrap justify-center bg-[rgb(3,7,30,0.5)] py-[15px] [&>*]:m-[20px] rounded-[15px] h-[560px]">
                            {skills.backend.map((data) => {
                                return (
                                    <div
                                        className="w-[35%] flex justify-center items-center bg-(--dark-theme) rounded-[10px] py-[20px] flex-wrap"
                                        key={data.id}
                                        data-aos="fade-up"
                                        data-aos-duration={data.id % 2 ? duration : duration + 500}
                                    >
                                        <img
                                            loading="lazy"
                                            className="w-[60px]"
                                            src={data.icon}
                                            alt=""
                                        />
                                        <div className="w-full text-center mt-[10px]">
                                            {data.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 flex-wrap">
                        <h3 className="text-[25px] font-bold">Tools</h3>
                        <div className="flex flex-wrap justify-center bg-[rgb(3,7,30,0.5)] py-[15px] [&>*]:m-[20px] rounded-[15px] h-[560px]">
                            {skills.tools.map((data) => {
                                return (
                                    <div
                                        className="w-[35%] flex justify-center items-center bg-(--dark-theme) rounded-[10px] py-[20px] flex-wrap"
                                        key={data.id}
                                        data-aos="fade-up"
                                        data-aos-duration={data.id % 2 ? duration : duration + 500}
                                    >
                                        <img
                                            loading="lazy"
                                            className="w-[60px]"
                                            src={data.icon}
                                            alt=""
                                        />
                                        <div className="w-full text-center mt-[10px]">
                                            {data.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
