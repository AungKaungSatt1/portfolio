import { ChatCircleDots, List } from "phosphor-react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

export const PortfolioContext = createContext();

export default function App() {
    const navigate = useNavigate();
    const [list, setList] = useState(false);

    return (
        <>
            <nav className="fixed px-[15px] py-[10px] bg-(--primary-translucent-color) border border-(--white) top-5 left-[7%] w-[85%] rounded-[10px] shadow-lg backdrop-blur-[20px] z-1000 transition-all duration-500 ease-in-out">
                <div className="flex justify-between items-center">
                    <img
                        className="inline-block cursor-pointer"
                        src="/portfolio/Logo.svg"
                        alt="Logo"
                        onClick={() => navigate("/")}
                    />
                    <ul className="hidden lg:inline-flex text-[1.2em] gap-5 [&>*]:cursor-pointer md:inline-flex sm:hidden [&>*]:hover:text-(--additional-color) [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/projects")}>Projects</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/contact")}>Contact</li>
                    </ul>
                    <span
                        className="hidden lg:inline-block md:inline-block sm:hidden text-(--primary-color) rounded-t-[50px] rounded-br-[50px] p-[2px] bg-(--dark-theme) cursor-pointer"
                        onClick={() => navigate("/contact")}
                    >
                        <ChatCircleDots size="2em" />
                    </span>
                    <span
                        className="inline-block lg:hidden md:hidden sm:inline-block duration-500 cursor-pointer"
                        style={
                            list
                                ? {
                                      rotate: "-180deg",
                                      color: "var(--additional-color)",
                                  }
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
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/projects")}>Projects</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/contact")}>Contact</li>
                    </ul>
                )}
            </nav>
            <PortfolioContext.Provider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:name" element={<ProjectDetail />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </PortfolioContext.Provider>
        </>
    );
}
