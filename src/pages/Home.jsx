import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";
import data from "../data/projects.json";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Code, CodepenLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            await setProjects(data);
        })();
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center gap-10 lg:pt-[50px]w-full h-[100vh] bg-linear-30 from-(--primary-color) to-(--secondary-color) flex-wrap">
                <div className="flex-col justify-center md:justify-center lg:w-[40%] md:w-[75%] sm:w-[75%]">
                    <span className="flex gap-2 lg:justify-start md:justify-center sm:justify-center justify-center">
                        <h2 className="text-[3em] font-bold cabin">I AM</h2>
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
                <div className="hidden lg:block md:hidden sm:hidden">
                    <div>
                        <Code />
                    </div>
                    <div>
                        <CodepenLogo />
                    </div>
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
                        return <Card data={data} />;
                    })}
                </div>
                <Link className="text-center block underline text-(--additional-color)">
                    See More
                </Link>
            </div>
            <div className="bg-(--secondary-color) text-(--white)">
                <h1 className="text-center lg:text-start lg:ms-[85px] font-bold text-[25px] lg:text-[40px] md:text-[40px] sm:text-[25px] my-[50px]">
                    Skill <strong className="text-(--additional-color)">.</strong>
                </h1>
                <h3>FrontEnd</h3>
            </div>
            <Footer />
        </div>
    );
}
