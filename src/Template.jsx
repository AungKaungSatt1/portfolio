import { ChatCircleDots, List } from "phosphor-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Template() {
    const navigate = useNavigate();
    const [list, setList] = useState(false);

    return (
        <>
            <nav className="fixed px-[15px] py-[10px] bg-(--primary-translucent-color) border border-(--white) top-5 left-[7%] w-[85%] rounded-[10px] shadow-lg backdrop-blur-[20px] z-1000 transition-all duration-500 ease-in-out">
                <div className="flex justify-between items-center">
                    <img className="inline-block" src="/portfolio/Logo.svg" alt="Logo" />
                    <ul className="hidden lg:inline-flex text-[1.3em] gap-5 [&>*]:cursor-pointer md:inline-flex sm:hidden">
                        <li onClick={() => navigate("/portfolio/")}>Home</li>
                        <li onClick={() => navigate("/portfolio/projects")}>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <span className="hidden lg:inline-block md:inline-block sm:hidden text-(--primary-color) rounded-t-[50px] rounded-br-[50px] p-[2px] bg-(--dark-theme)">
                        <ChatCircleDots size="2em" />
                    </span>
                    <span
                        className="inline-block lg:hidden md:hidden sm:inline-block duration-500 cursor-pointer"
                        style={
                            list
                                ? { rotate: "-180deg", color: "var(--additional-color)" }
                                : { rotate: "0deg", color: "var(--dark-theme)" }
                        }
                        onClick={() => {
                            list ? setList(false) : setList(true);
                        }}
                    >
                        <List size="2em" />
                    </span>
                </div>
                {list && (
                    <ul className="flex-col [&>*]:hover:bg-(--additional-color) [&>*]:p-[10px] [&>*]:hover:text-(--white) mt-[10px] [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-in-out">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                )}
            </nav>
            <Outlet />
        </>
    );
}
