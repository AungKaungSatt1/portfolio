import { Code, CodeSimple } from "phosphor-react";
import { motion, useScroll } from "motion/react";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
    const frontendRef = useRef();
    const backendRef = useRef();
    const [distance, setDistance] = useState(0);
    const { scrollYProgress } = useScroll();
    const infiniteCarouselItems = ["Javascript", "React", "NextJS", "Tailwind", "MongoDB"];

    useEffect(() => {
        const frontendPosition = frontendRef.current.getBoundingClientRect();
        const backendRefPosition = backendRef.current.getBoundingClientRect();

        const dx = frontendPosition.left - backendRefPosition.left;
        const dy = frontendPosition.top - backendRefPosition.top;

        const calculatedDistance = Math.sqrt(dx * dx + dy * dy);
        setDistance(calculatedDistance);

        console.log(calculatedDistance);
    }, [frontendRef, backendRef]);

    return (
        <div>
            <div className="flex flex-wrap h-[150vh] lg:h-[90vh] md:h-[90vh] sm:h-[150vh] w-full">
                <div className="flex flex-col justify-center h-[430px] border lg:h-full md:h-full items-center w-[100%] lg:w-[50%] md:w-[50%] sm:w-[100%] text-center lg:text-start md:text-start sm:text-center sm:h-[330px]">
                    <h1 className="text-[40px] lg:text-[50px] md:text-[50px] sm:text-[40px] font-bold lg:me-auto md:me-auto lg:ms-[100px] md:ms-[65px]">
                        About Me <strong className="text-(--additional-color)">.</strong>
                    </h1>
                    <p className="w-[70%]">
                        I am Jake. And, I am Burmese, based in Malaysia, learning web development,
                        also a college student in Software Engineering Major who wants to have
                        better understanding in developing applications. I started learning Web
                        development when I was 14 years old.
                    </p>
                </div>
                <div className="border h-[500px] w-full lg:w-[50%] md:w-[50%] sm:w-full">
                    <img src="/portfolio/Next_Movies.png" alt="" />
                </div>
            </div>
            <div className="whitespace-nowrap overflow-hidden py-[20px] bg-[rgb(3,7,30,0.8)] text-white text-carousel">
                <div className="[&>*]:mx-[20px] infinite-carousel">
                    {infiniteCarouselItems.map((item) => {
                        return (
                            <span className="inline-flex items-center">
                                <CodeSimple size="2em" />
                                <span className="w-[170px] h-[50px] text-center text-[20px]/12 rounded-[15px] mx-[10px] bg-[rgb(3,7,30)]">
                                    {item}
                                </span>
                                <Code size="2em" />
                            </span>
                        );
                    })}
                </div>
                <div className="[&>*]:mx-[20px] infinite-carousel">
                    {infiniteCarouselItems.map((item) => {
                        return (
                            <span className="inline-flex items-center">
                                <CodeSimple size="2em" />
                                <span className="w-[170px] h-[50px] text-center text-[20px]/12 rounded-[15px] mx-[10px] bg-[rgb(3,7,30)]">
                                    {item}
                                </span>
                                <Code size="2em" />
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className="mt-[50px] w-full lg:w-[85%] md:w-[85%] sm:w-full mx-auto">
                <h1 className="text-[40px] lg:text-[50px] md:text-[50px] sm:text-[40px] font-bold text-center lg:text-start md:text-start sm:text-center mb-[50px]">
                    My Journey <strong className="text-(--additional-color)">.</strong>
                </h1>
                <div className="grid grid-cols-4 grid-row-2">
                    <div className="relative col-span-1 row-span-2 mt-[-50px] lg:mt-[0px] md:mt-[0px] sm:mt-[-50px]">
                        <span className="flex absolute items-center mt-[15px]" ref={frontendRef}>
                            <motion.span
                                className="bg-(--secondary-color) h-[50px] w-[50px] flex justify-center items-center rounded-[50px]"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    duration: 0.7,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}
                            >
                                <img src="/portfolio/Frontend.svg" alt="Frontend" />
                            </motion.span>
                            <motion.h3
                                className="inline-block text-[1.5em] font-bold"
                                initial={{ x: 0, opacity: 0 }}
                                whileInView={{ x: 10, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}
                            >
                                Frontend
                            </motion.h3>
                        </span>
                        <motion.div
                            id="scroll-indicator"
                            style={{
                                scaleY: scrollYProgress,
                                position: "absolute",
                                top: 30,
                                left: 20,
                                right: 0,
                                width: 10,
                                height: `${distance}px`,
                                zIndex: -1,
                                originY: 0,
                                backgroundColor: "var(--dark-theme)",
                            }}
                        />
                        <span className="flex absolute items-center top-[55%]" ref={backendRef}>
                            <motion.span
                                className="bg-(--secondary-color) h-[50px] w-[50px] flex justify-center items-center rounded-[50px]"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    duration: 0.7,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}
                            >
                                <img src="/portfolio/Backend.svg" alt="Backend" />
                            </motion.span>
                            <motion.h3
                                className="inline-block text-[1.5em] font-bold"
                                initial={{ x: 0, opacity: 0 }}
                                whileInView={{ x: 10, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}
                            >
                                Backend
                            </motion.h3>
                        </span>
                    </div>
                    <div className="col-span-3 row-span-1 [&>*]:my-[30px] [&>*]:lg:ms-[15px] [&>*]:md:ms-[15px] [&>*]:ms-[-15px] [&>*]:sm:ms-[-15px]">
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >
                            At 14 years old → Learnt{" "}
                            <strong className="font-normal text-(--additional-color)">
                                HTML, CSS, and CSS layouts.
                            </strong>
                        </motion.p>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >
                            At 15 years old → Learnt{" "}
                            <strong className="font-normal text-(--additional-color)">
                                Java and its basic principles, Javascript, Bootstrap,
                            </strong>{" "}
                            and created some interactive websites.
                        </motion.p>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >
                            At 16 years old → Learnt{" "}
                            <strong className="font-normal text-(--additional-color)">
                                PHP, and Laravel,
                            </strong>{" "}
                            and created a Social Media app with Bootstraps and SQL.
                        </motion.p>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >
                            At 17 years old → Learnt{" "}
                            <strong className="font-normal text-(--additional-color)">
                                React, Tailwind CSS, Material UI, and NextJS,
                            </strong>{" "}
                            and did some projects to boost my understanding.
                        </motion.p>
                    </div>
                    <div className="col-span-3 row-span-1 [&>*]:my-[30px] [&>*]:lg:ms-[15px] [&>*]:md:ms-[15px] [&>*]:ms-[-15px] [&>*]:sm:ms-[-15px]">
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >
                            At 15 years old → Learnt{" "}
                            <strong className="font-normal text-(--additional-color)">
                                SQL, and how databases work with Queries.
                            </strong>{" "}
                            And, Created some apps with SQL for practices.
                        </motion.p>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >
                            At 16 years old → Learnt{" "}
                            <strong className="font-normal text-(--additional-color)">
                                NodeJs, Npm, Express Api, MongoDB, Prisma DB, and how object-based
                                databases work.
                            </strong>{" "}
                        </motion.p>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >
                            At 17 years old → Learnt{" "}
                            <strong className="font-normal text-(--additional-color)">
                                the basic of Nginx, and how Docker functions
                            </strong>
                            , and created Easy Recipes website with them.
                        </motion.p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
