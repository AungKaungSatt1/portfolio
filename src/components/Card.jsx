import { ArrowCircleUpRight, X } from "phosphor-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Card({ data }) {
    let duration = 1500;
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const cursorXSpring = useSpring(x);
    const cursorYSpring = useSpring(y);

    const rotateX = useTransform(cursorYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(cursorXSpring, [0.5, -0.5], ["-15deg", "15deg"]);
    const rotateZ = useTransform(cursorYSpring, [0.5, -0.5], ["-15deg", "15degs"]);

    const handleMouseLeave = (e) => {
        x.set(0);
        y.set(0);
    };

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const cursorX = e.clientX - rect.top;
        const cursorY = e.clientY - rect.top;

        const xPct = cursorX / width - 0.5;
        const yPct = cursorY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <div
            className="w-full lg:w-[40%] md:w-[60%] sm:w-full m-[20px] flex-col justify-center lg:justify-start h-[450px] transform-3d"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration={data.id % 2 ? duration : duration + 250}
        >
            <motion.div
                className="perspective-normal transform-3d cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transform: `rotateZ(${rotateZ})` }}
            >
                <div className="bg-linear-90 from-[#E9E9E9] to-(--secondary-color) py-[40px] px-[30px] rounded-[15px]">
                    <img className="w-full rounded-[10px]" src={data.photo} alt={`${data.name}`} />
                </div>
            </motion.div>
            <span className="flex items-center my-[10px]">
                <h2 className="font-bold text-[20px] lg:text-[25px] md:text-[25px] sm:text-[20px]">
                    {data.name}
                </h2>
                <ArrowCircleUpRight
                    className="text-(--additional-color) ms-[15px] cursor-pointer"
                    size="1.5em"
                />
            </span>
            <p>{data.description}</p>
        </div>
    );
}
