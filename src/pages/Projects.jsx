import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import Card from "../components/Card";
import data from "../data/projects.json";
import { CaretLeft, CaretRight } from "phosphor-react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Projects() {
    const [item, setItem] = useState(1);
    const [lastItem, setLastItem] = useState(3);
    const [projects, setProjects] = useState([]);
    const [clientWidth, setClientWidth] = useState(document.body.clientHeight);
    const navigate = useNavigate();

    new ResizeObserver(() => {
        setClientWidth(document.body.clientWidth);
    }).observe(document.body);

    useEffect(() => {
        setProjects(data);
    }, [item, lastItem]);

    return (
        <div id="projects">
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
