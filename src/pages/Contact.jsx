import { CheckCircle, Envelope, Phone } from "phosphor-react";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const public_key = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
    const form = useRef();
    const [popup, setPopup] = useState(false);
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        if (popup) {
            if (counter > 0) {
                const timer = setTimeout(() => setCounter(counter - 1), 1000);
                return () => {
                    clearTimeout(timer);
                };
            }

            setPopup(null);
            setCounter(3);
        }
    }, [counter, popup]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_gx7oifb", "template_jfbxp4o", form.current, {
                publicKey: public_key,
            })
            .then(
                () => {
                    console.log("Success");
                },
                (err) => {
                    console.log("failed", err);
                }
            );
        e.target.reset();
        setPopup(true);
    };

    return (
        <div className="w-full h-[100vh] flex flex-wrap mt-[50px]">
            <AnimatePresence initial={false}>
                {popup && (
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 150, opacity: 0 }}
                        className="fixed z-10000000 bottom-[7%] lg:right-[45%] md:right-[40%] sm:right-[35%] right-[30%] bg-(--dark-theme) p-[15px] w-[200px] h-[50px] flex justify-between text-white rounded-[5px] shadow-lg shadow-[rgb(255,255,255,0.3)]"
                    >
                        <span>Email Sent</span>
                        <CheckCircle size="1.5em" />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="w-[540px] lg:h-full md:h-[650px] sm:h-[500px] h-[400px] flex flex-col mx-auto">
                <div className="mx-auto mt-[120px] flex flex-col items-center lg:items-start md:items-center">
                    <h1 className="text-[3em] font-bold mb-[30px]">
                        Get In Touch{" "}
                        <strong className="text-(--additional-color)">.</strong>
                    </h1>
                    <p className="w-[80%] lg:text-start md:text-center sm:text-center text-center">
                        Please reach out to me from the information below and
                        through the form.
                    </p>
                    <p className="flex items-center gap-5 my-[20px]">
                        <span>
                            <Envelope size="2em" />
                        </span>
                        <span className="text-[1em]">
                            aungkgsatt56@gmail.com
                        </span>
                    </p>
                    <p className="flex items-center gap-5 my-[20px]">
                        <span>
                            <Phone size="2em" />
                        </span>
                        <span className="text-[1em]">+60 179363425</span>
                    </p>
                </div>
            </div>
            <div className="w-[540px] lg:h-full md:h-[650px] sm:h-[550px] h-[550px] flex items-center justify-center mx-auto mb-[50px]">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="mx-auto [&>*]:w-[75%] [&>*]:mx-auto w-full [&>*]:transition-all [&>*]:ease-in-out [&>*]:duration-500"
                >
                    <p className="opacity-50 text-[14px] mb-[10px]">
                        Disclaimer: everything in this form will be sent to my
                        email with the help of <strong>EmailJS</strong> (You can
                        only send 200 emails a month with the service)
                    </p>
                    <div className="flex bg-(--dark-theme) items-center text-white py-[15px] px-[25px] text-[20px] mb-[15px] rounded-[15px]">
                        <input
                            className="focus:outline-0 w-full placeholder:text-[16px] placeholder:text-(--primary-color)"
                            type="text"
                            name="name"
                            placeholder="Name..."
                            required
                        />
                    </div>
                    <div className="flex bg-(--dark-theme) items-center text-white py-[15px] px-[25px] text-[20px] mb-[15px] rounded-[15px]">
                        <input
                            className="focus:outline-0 w-full placeholder:text-[16px] placeholder:text-(--primary-color)"
                            type="text"
                            name="email"
                            placeholder="Email..."
                            required
                        />
                    </div>
                    <input
                        type="text"
                        className="hidden"
                        defaultValue={new Date()}
                        name="time"
                    />
                    <textarea
                        className="block bg-(--dark-theme) text-(--primary-color) p-[25px] text-[20px] placeholder:text-(--primary-color) placeholder:text-[16px] focus:outline-0 rounded-[15px] resize-none"
                        name="message"
                        placeholder="Message..."
                        rows="3"
                        col="45"
                        required
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
