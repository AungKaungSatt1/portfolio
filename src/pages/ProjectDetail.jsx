import { use, useEffect, useState } from "react";
import data from "../data/projects.json";
import { Link, useParams } from "react-router-dom";
import { GithubLogo, StarFour } from "phosphor-react";
import Footer from "../components/Footer";

export default function ProjectDetail() {
    const { name } = useParams();
    const [project, setProject] = useState({});
    const envelopes = ["about", "challenges", "outcomes"];
    const letters = [project.description, project.challenges, project.outcomes];
    const openEnvelope = (e, envelope) => {
        if (e.target.classList.contains("clicked")) {
            e.target.setAttribute("onClick", null);
            e.target.classList.remove("clicked");
            e.target.children[5].classList.add("-bottom-10");
            e.target.children[5].classList.remove("-bottom-15", "opacity-0");
            e.target.children[0].classList.remove("top-15", "opacity-0");
            e.target.children[1].classList.remove("top-10");
            e.target.children[2].classList.remove("top-15", "opacity-0");
            e.target.children[3].classList.remove("top-15", "opacity-0");
            e.target.children[4].children[0].classList.remove("w-[150px]");
            e.target.children[4].children[0].children[1].remove();
            e.target.children[4].classList.add("top-25");
            e.target.children[4].classList.remove("-top-7");
            setTimeout(() => {
                e.target.children[3].classList.remove(
                    "transform-[rotateX(180deg)]",
                    "-z-3"
                );
            }, 500);
            setTimeout(() => {
                e.target.setAttribute(
                    "onClick",
                    "(e) => {openEnvelope(e, envelope)};"
                );
            }, 2000);
        } else {
            e.target.classList.add("clicked");
            e.target.setAttribute("onClick", null);
            e.target.children[3].classList.add(
                "transform-[rotateX(180deg)]",
                "-z-3"
            );
            setTimeout(() => {
                e.target.children[5].classList.remove("-bottom-10");
                e.target.children[5].classList.add("-bottom-15", "opacity-0");
                e.target.children[4].classList.remove("top-25");
                e.target.children[4].classList.add("-top-7");
                e.target.children[4].children[0].classList.add("w-[150px]");
                e.target.children[3].classList.add("top-15", "opacity-0");
                e.target.children[2].classList.add("top-15", "opacity-0");
                e.target.children[1].classList.add("top-10");
                e.target.children[0].classList.add("top-15", "opacity-0");
                setTimeout(() => {
                    if (!e.target.children[4].children[0].children[1])
                        e.target.children[4].children[0].innerHTML += `<span style="color:white; display:inline-block; width: 80%; text-align: center; font-weight: 700;">${envelope.toUpperCase()}</span>`;
                }, 300);
            }, 500);
            setTimeout(() => {
                e.target.setAttribute(
                    "onClick",
                    "(e) => {openEnvelope(e, envelope)};"
                );
            }, 2000);
        }
    };

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
                    <div className="col-span-12 flex items-center flex-wrap justify-between w-full [&>*]:mx-auto [&>*]:col-span-4 [&>*]:w-[300px] [&>*]:h-[200px] [&>*]:relative [&>*]:perspective-normal gap-5">
                        {envelopes.map((envelope, index) => {
                            return (
                                <div key={envelope} className="mb-[100px]">
                                    <div
                                        className="w-full h-full [&>*]:transition-all [&>*]:ease-in-out [&>*]:duration-1000 cursor-pointer"
                                        onClick={(e) =>
                                            openEnvelope(e, envelope)
                                        }
                                    >
                                        <div className="bg-[#acacf3] w-[106.5%] h-full -z-4 absolute top-0"></div>
                                        <div className="bg-(--primary-color) shadow-lg w-[80%] h-full -z-2 absolute top-0 left-11 text-[0.9em] p-[10px]">
                                            {letters[index]}
                                        </div>
                                        <div className="w-full h-full border-t-transparent border-t-[100px] border-s-[160px] border-e-[160px] border-e-(--secondary-color) border-s-(--secondary-color) origin-top absolute -z-1 top-0"></div>
                                        <div className="w-full h-full border-t-[120px] border-t-[#acacf3] border-s-[160px] border-e-[160px] border-s-transparent border-e-transparent origin-top absolute top-0 -z-1 transition-all ease-in-out duration-700 cursor-pointer"></div>
                                        <div className="text-center absolute top-25 w-full -z-1">
                                            <span className="text-start inline-block mx-auto bg-[#c785ec] border-2 border-(--secondary-color) p-[5px] rounded-full ms-[25px] [&>*]:inline-block w-[39px] transition-all duration-500 ease-in-out">
                                                <StarFour
                                                    className="text-[#ffd700]"
                                                    size="1.5em"
                                                    weight="fill"
                                                />
                                            </span>
                                        </div>
                                        <h1 className="text-center text-[1.5em] ms-[10px] absolute -bottom-10 w-full">
                                            {envelope.toUpperCase()}
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
