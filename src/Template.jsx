import { ChatCircleDots } from "phosphor-react";
import { Outlet } from "react-router-dom";

export default function Template() {
    return (
        <>
            <nav className="fixed flex px-[15px] py-[10px] justify-between bg-(--primary-translucent-color) border border-(--white) top-5 left-[7%] w-[85%] rounded-[10px] items-center shadow-lg backdrop-blur-[20px] z-1000">
                <img className="inline-block" src="/portfolio/Logo.svg" alt="Logo" />
                <ul className="inline-flex text-[1.3em] gap-5 [&>*]:cursor-pointer">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <span className="inline-block text-(--primary-color) rounded-t-[50px] rounded-br-[50px] p-[2px] bg-(--dark-theme)">
                    <ChatCircleDots size="2em" />
                </span>
            </nav>
            <Outlet />
        </>
    );
}
