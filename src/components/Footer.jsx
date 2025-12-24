import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useContext } from "react";
import { PortfolioContext } from "../App";

export default function Footer() {
    const { homeRef, projectsRef, aboutRef, contactRef, pathname } =
        useContext(PortfolioContext);

    return (
        <footer className="w-[85%] mx-auto mb-[25px] md:w-[95%] sm:w-[95%]">
            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center lg:justify-between md:justify-between sm:items-center mb-[15px] flex-wrap">
                <ul className="flex justify-center lg:justify-start md:justify-start sm:justify-center gap-5 [&>*]:cursor-pointer text-[1.1em] mb-[15px] [&>*]:hover:text-(--additional-color)">
                    <li
                        onClick={() =>
                            pathname === "/"
                                ? homeRef.current.scrollIntoView()
                                : navigate("/")
                        }
                    >
                        Home
                    </li>
                    <li
                        onClick={() =>
                            pathname === "/"
                                ? projectsRef.current.scrollIntoView()
                                : navigate("/")
                        }
                    >
                        Projects
                    </li>
                    <li
                        onClick={() =>
                            pathname === "/"
                                ? aboutRef.current.scrollIntoView()
                                : navigate("/")
                        }
                    >
                        About
                    </li>
                    <li
                        onClick={() =>
                            pathname === "/"
                                ? contactRef.current.scrollIntoView()
                                : navigate("/")
                        }
                    >
                        Contact
                    </li>
                </ul>
                <span className="flex text-[2em] gap-5 [&>*]:hover:text-(--additional-color) [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-in-out">
                    <a href="https://github.com/AungKaungSatt1" target="_blank">
                        <GithubLogo />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aung-kaung-satt-2474772b7/"
                        target="_blank"
                    >
                        <LinkedinLogo />
                    </a>
                </span>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center lg:justify-between md:justify-between sm:items-center flex-wrap">
                <a
                    href="/portfolio/Aung_Kaung_Satt_CV.pdf"
                    download="AungKaungSatt_Resume.pdf"
                    target="_blank"
                    className="border border-(--additional-color) text-(--additional-color) px-[40px] py-[10px] rounded-[10px] hover:bg-(--additional-color) hover:text-(--white) transition-all duration-500 ease-in-out mb-[15px] cursor-pointer"
                >
                    Download Resume
                </a>
                <p className="block sm:block">
                    &copy; 2025. All Rights reserved.
                </p>
            </div>
        </footer>
    );
}
