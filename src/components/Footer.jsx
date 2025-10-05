import { GithubLogo, LinkedinLogo } from "phosphor-react";

export default function Footer() {
    return (
        <footer className="w-[85%] mx-auto mb-[25px]">
            <div className="flex justify-between mb-[15px]">
                <ul className="flex gap-5 [&>*]:cursor-pointer text-[1.1em]">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <span className="flex text-[2em] gap-5">
                    <GithubLogo />
                    <LinkedinLogo />
                </span>
            </div>
            <div className="flex justify-between">
                <button className="border border-(--dark-theme) text-(--dark-theme) px-[40px] py-[10px] rounded-[10px] hover:bg-(--dark-theme) hover:text-(--white) transition-all duration-500 ease-in-out cursor-pointer">
                    Browse Projects
                </button>
                <p>Made with ❤️ by Jake</p>
            </div>
        </footer>
    );
}
