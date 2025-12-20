import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import data from "../data/projects.json";
import { PortfolioContext } from "../App";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const { projectsRef } = useContext(PortfolioContext);

    useEffect(() => {
        setProjects(data);
    }, []);

    return (
        <div id="projects" ref={projectsRef}>
            <h1 className="text-center lg:text-center font-bold text-[25px] lg:text-[40px] md:text-[40px] sm:text-[25px] my-[50px]">
                Projects{" "}
                <strong className="text-(--additional-color)">.</strong>
            </h1>
            <div className="w-full mx-auto mb-[50px]">
                <div className="flex flex-wrap justify-center md:justify-center sm:justify-center w-full">
                    {projects.map((data) => {
                        return <Card data={data} key={data.id} />;
                    })}
                </div>
            </div>
        </div>
    );
}
