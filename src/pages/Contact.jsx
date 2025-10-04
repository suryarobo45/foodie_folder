import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button"
import { StyledEngineProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export default function Contact(){
 
    
    return(
        <section className="w-full relative">
            <div className="flex flex-col items-center justify-center bg-[url('https://foodily.vercel.app/assets/images/background/6.jpg')] w-full md:h-[400px] bg-no-repeat  bg-cover">
                <h1 className="text-white md:p-[100px 10px] mb-5 md:text-5xl text-2xl font-extrabold">Contact</h1>
                <Breadcrumbs aria-label="breadcrumb" >
                    <Link underline="hover" className="font-medium text-white" to="/"> Home </Link>
                    <Typography className="capitalize text-white">Contact us</Typography>
                </Breadcrumbs>
                <div className="bg-[url('https://foodily.vercel.app/assets/images/background/pattern-7.png')] bg-no-repeat bg-cover w-full h-[200px] relative top-[60px]"></div>
                
            </div>
            <div className="flex justify-center flex-col items-center md:pt-10 pt-3">
                <p className="font-lillybelle text-2xl capitalize pb-2 textGrey">Get In Touch</p>
                <h2 className="md:text-7xl text-3xl font-medium">Hi <span className="text-[#de9390]">Say</span></h2>
                <div className="flex justify-center">
                    <div className=" mt-5  w-[100px] h-[50px] bg-[url('./assets/images/small-flower.png')] bg-no-repeat"></div>
                </div>
                <div className="container mx-auto">
                    <p className="text-xl text-center pb-10">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas
                        accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint
                        atqui voluptatibus an, pro ne malis semper perpetua</p>
                    <div className="grid grid-cols-3">
                        <div className="col-span-2">
                            <h1 className="text-black text-4xl font-semibold pb-4">Drop us a line</h1>
                            <p className="pb-2 text-[#879296] text-xl">Your email address will not be published. Required fields are marked *</p>
                            <textarea name="" rows='10' className="border border-[#d1d1d1] rounded-xl w-full resize-none focus:border-[#f7a392] outline-none p-10" id="" placeholder="Your Comment"></textarea>
                            <div className="flex flex-row gap-2 mb-5">
                                <input type="text" className="p-5 flex-1 rounded-xl border outline-none border-[#d1d1d1d1] focus:border-[#f7a392]" placeholder="Your Name" />
                                <input type="text" className="p-5 flex-1 rounded-xl border outline-none border-[#d1d1d1d1] focus:border-[#f7a392]" placeholder="Your Email" />
                            </div>
                            <button className="bg-green-300 text-white hover:bg-pink-300 px-5 py-5 rounded-full transition ease-in-out duration-500 mb-5">
                                <FontAwesomeIcon icon={faArrowRight} /> Send</button>
                        </div>
                        <div className="col-span-1 md:p-[100px]">
                            <div className="container-inner-contnt-1">
                                <h3 className="text-black text-4xl pb-3"> Berlin</h3>
                                <ul>
                                    <li>52 Corso Magenta</li>
                                    <li>20123 Milano, Italy</li>
                                    <li>+123 -45678-900</li>
                                    <li>yourspa@info.com</li>
                                </ul>
                            </div>
                            <div className="container-inner-content-2 mt-10">
                                 <h3 className="text-black text-4xl pb-3"> Opening Hours</h3>
                                <ul>
                                    <li>Monday – Friday 09:00 – 23:00</li>
                                    <li>Saturday 09:00 – 22:00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-96 mb-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.007748342313!2d80.27071811525247!3d13.082680090779974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265dcca7fbe4d%3A0x6f8b7cf3f18c09a6!2sMarina%20Beach!5e0!3m2!1sen!2sin!4v1696156277743!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    
                </div>
                
            </div>
            <div className=" relative md:mb-[10px]">
                <div className="grid grid-cols-5 absolute ">
                    <img src="https://foodily.vercel.app/assets/images/gallery/1.jpg" className="mx-auto relative" alt="" />
                    <img src="https://foodily.vercel.app/assets/images/gallery/2.jpg" alt="" />
                    <img src="https://foodily.vercel.app/assets/images/gallery/3.jpg" alt="" />
                    <img src="https://foodily.vercel.app/assets/images/gallery/4.jpg" alt="" />
                    <img src="https://foodily.vercel.app/assets/images/gallery/5.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}