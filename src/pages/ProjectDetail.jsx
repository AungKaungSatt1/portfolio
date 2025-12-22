import { useEffect, useState } from "react";
import data from "../data/projects.json";
import { Link, useParams } from "react-router-dom";
import { GithubLogo } from "phosphor-react";
import Footer from "../components/Footer";

export default function ProjectDetail() {
    const { name } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
            data.map((item) => (item.name == name ? setProject(item) : false));
        })();
    }, []);

    return (
        <>
            <div className="h-[587px] w-full mb-[100px]">
                <div className="mx-auto w-[90%] mt-[100px] [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-in-out">
                    <h1 className="text-[3em] font-bold">
                        {project.name}{" "}
                        <strong className="text-(--additional-color)">.</strong>
                    </h1>
                    <div className="mb-[30px] flex justify-between">
                        <p className="lg:text-[20px] md:text-[15px] sm:text-[14px] text-[12px] w-[80%]">
                            {project.description}
                        </p>
                        <span className="cursor-pointer hover:text-(--additional-color)">
                            <GithubLogo size="2em" />
                        </span>
                    </div>
                    <div className="w-full bg-linear-90 from-[#E9E9E9] to-(--secondary-color) shadow-lg lg:py-[40px] lg:px-[30px] rounded-[15px] mb-[30px]">
                        <img
                            className="lg:h-[60%] md:h-[360px] mx-auto rounded-[15px] w-full"
                            src={project.photo}
                            alt={project.name}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 w-[90%] mx-auto mb-[75px]">
                    <div className="col-span-12 my-[30px] h-[100px] mx-auto p-[15px] rounded-[10px] w-full grid grid-cols-12 [&>*]:items-center">
                        <div className="inline-flex flex-col col-span-4">
                            <strong>Issued Year</strong>
                            <span>2025</span>
                        </div>
                        <div className="inline-flex flex-col col-span-4 border-s border-e border-s-gray-300 border-e-gray-300">
                            <strong>Github</strong>
                            <Link
                                to={project.github}
                                target="_blank"
                                className="cursor-pointer inline w-[35px] hover:text-(--additional-color)"
                            >
                                <GithubLogo size="2em" />
                            </Link>
                        </div>
                        <div className="inline-flex flex-col col-span-4">
                            <strong>Issued Year</strong>
                            <span>2025</span>
                        </div>
                    </div>
                    <div className="col-span-12 flex items-center flex-wrap justify-between w-full [&>*]:mx-auto [&>*]:col-span-4 [&>*]:w-[300px] [&>*]:h-[200px] [&>*]:relative [&>*]:perspective-normal gap-5"></div>
                </div>
                <Footer />
            </div>
        </>
    );
}
