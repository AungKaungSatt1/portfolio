import { Envelope, Folder, Phone } from "phosphor-react";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="w-full h-[100vh] flex flex-wrap mt-[50px]">
            <div className="w-[600px] h-full flex flex-col mx-auto">
                <div className="mx-auto mt-[120px] flex flex-col items-center lg:items-start md:items-center">
                    <h1 className="text-[3em] font-bold mb-[30px]">
                        Get In Touch <strong className="text-(--additional-color)">.</strong>
                    </h1>
                    <p className="w-[80%] lg:text-start md:text-center sm:text-center text-center">
                        Please reach out to me from the information below and through the form.
                    </p>
                    <p className="flex items-center gap-5 my-[20px]">
                        <span>
                            <Envelope size="2em" />
                        </span>
                        <span className="text-[1em]">aungkgsatt56@gmail.com</span>
                    </p>
                    <p className="flex items-center">
                        <span>
                            <Phone size="2em" />
                        </span>
                        <span></span>
                    </p>
                </div>
            </div>
            <div className="w-[600px] lg:h-full md:h-[75%] sm:h-[75%] h-[75%] flex items-center justify-center mx-auto mb-[50px]">
                <form className="mx-auto [&>*]:w-[75%] [&>*]:mx-auto w-full [&>*]:transition-all [&>*]:ease-in-out [&>*]:duration-500">
                    <p className="opacity-50 text-[14px]">This will directly be sent to my email</p>
                    <div className="flex bg-(--dark-theme) items-center text-white py-[15px] px-[25px] text-[20px] mb-[15px] rounded-[15px]">
                        <input
                            className="focus:outline-0 w-full placeholder:text-[16px] placeholder:text-(--primary-color)"
                            type="text"
                            name="email"
                            placeholder="Email and Files..."
                        />
                        <label
                            htmlFor="file"
                            className="w-[50px] flex items-center justify-center h-[45px] bg-(--primary-color) text-(--dark-theme) rounded-full cursor-pointer"
                        >
                            <Folder />
                        </label>
                        <input type="file" className="hidden" name="file" id="file" />
                    </div>
                    <textarea
                        className="block bg-(--dark-theme) text-(--primary-color) p-[25px] text-[20px] placeholder:text-(--primary-color) placeholder:text-[16px] focus:outline-0 rounded-[15px] resize-none"
                        name="information"
                        placeholder="Information..."
                        rows="5"
                        col="45"
                    ></textarea>
                    <button className="block text-(--dark-theme) border border-(--dark-theme) mt-[20px] py-[15px] rounded-[15px] cursor-pointer hover:bg-(--dark-theme) hover:text-(--primary-color)">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
