import { ChatCircleDots, List } from "phosphor-react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { createContext, useRef, useState } from "react";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { Link } from "react-router-dom";

export const PortfolioContext = createContext();

export default function App() {
    const homeRef = useRef();
    const projectsRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();
    const { pathname } = useLocation();
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
                        onClick={() => {
                            if (pathname === "/")
                                homeRef.current.scrollIntoView();
                            else navigate("/");
                        }}
                    />
                    <ul className="hidden lg:inline-flex text-[1.2em] gap-5 [&>*]:cursor-pointer md:inline-flex sm:hidden [&>*]:hover:text-(--additional-color) [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
                        <li
                            onClick={() => {
                                if (pathname === "/")
                                    homeRef.current.scrollIntoView();
                                else navigate("/");
                            }}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => {
                                if (pathname === "/") {
                                    projectsRef.current.scrollIntoView();
                                } else {
                                    navigate("/");
                                    setTimeout(() => {
                                        projectsRef.current.scrollIntoView();
                                    }, 300);
                                }
                            }}
                        >
                            Projects
                        </li>
                        <li
                            onClick={() => {
                                if (pathname === "/") {
                                    aboutRef.current.scrollIntoView();
                                } else {
                                    navigate("/");
                                    setTimeout(() => {
                                        aboutRef.current.scrollIntoView();
                                    }, 300);
                                }
                            }}
                        >
                            About
                        </li>
                        <li
                            onClick={() => {
                                if (pathname === "/") {
                                    contactRef.current.scrollIntoView();
                                } else {
                                    navigate("/");
                                    setTimeout(() => {
                                        contactRef.current.scrollIntoView();
                                    }, 300);
                                }
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                    <span
                        className="hidden lg:inline-block md:inline-block sm:hidden text-(--primary-color) rounded-t-[50px] rounded-br-[50px] p-[2px] bg-(--dark-theme) cursor-pointer"
                        onClick={() => {
                            if (pathname === "/") {
                                contactRef.current.scrollIntoView();
                            } else {
                                navigate("/");
                                setTimeout(() => {
                                    contactRef.current.scrollIntoView();
                                }, 300);
                            }
                        }}
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
                        <li
                            onClick={() => {
                                if (pathname === "/")
                                    homeRef.current.scrollIntoView();
                                else navigate("/");
                            }}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => {
                                if (pathname === "/") {
                                    projectsRef.current.scrollIntoView();
                                } else {
                                    navigate("/");
                                    setTimeout(() => {
                                        projectsRef.current.scrollIntoView();
                                    }, 300);
                                }
                            }}
                        >
                            Projects
                        </li>
                        <li
                            onClick={() => {
                                if (pathname === "/") {
                                    aboutRef.current.scrollIntoView();
                                } else {
                                    navigate("/");
                                    setTimeout(() => {
                                        contactRef.current.scrollIntoView();
                                    }, 300);
                                }
                            }}
                        >
                            About
                        </li>
                        <li
                            onClick={() => {
                                if (pathname === "/") {
                                    contactRef.current.scrollIntoView();
                                } else {
                                    navigate("/");
                                    setTimeout(() => {
                                        contactRef.current.scrollIntoView();
                                    }, 300);
                                }
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                )}
            </nav>
            <PortfolioContext.Provider
                value={{ projectsRef, aboutRef, contactRef, homeRef, pathname }}
            >
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/projects/:name" element={<ProjectDetail />} />
                </Routes>
            </PortfolioContext.Provider>
        </>
    );
}
