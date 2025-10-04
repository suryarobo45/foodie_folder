import { Link } from "react-router-dom"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CardOverlay from "../components/CardOverlay";
import CardImgOverlay from "../components/CardImgOverlay";

export default function About() {
    return (
        <section className="w-full relative">
            <div className="flex flex-col items-center justify-center bg-[url('https://foodily.vercel.app/assets/images/background/6.jpg')] w-full md:h-[400px] bg-no-repeat  bg-cover">
                <h1 className="text-white md:p-[100px 10px] mb-5 md:text-5xl text-2xl font-extrabold ">About Us</h1>
                <Breadcrumbs aria-label="breadcrumb" >
                    <Link underline="hover" className="font-medium text-white" to="/"> Home </Link>

                    <Typography className="capitalize text-white">About us</Typography>
                </Breadcrumbs>
                <div className="bg-[url('https://foodily.vercel.app/assets/images/background/pattern-7.png')] bg-no-repeat bg-cover w-full h-[200px] relative top-[60px]"></div>

            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 md:p-[100px]">
                <div className="img-container relative">
                    <img src="https://foodily.vercel.app/assets/images/resource/history-3.jpg" className="rounded-lg" alt="" />
                    <div className="bg-[url('https://foodily.vercel.app/assets/images/resource/history-4.png')] bg-no-repeat w-full h-3/2 absolute top-1/2 left-[50px]"></div>
                </div>
                <div className="vision-container md:p-[100px]">
                    <p className="font-lillybelle text-2xl capitalize">Our Vision and History</p>
                    <h3 className="md:text-6xl font-medium leading-16">Founded in 1970 by <span className="text-[#de9190]">Chairman Jay Martin</span></h3>
                    <small className="text-lg text-[#5e5e5e]">The Juice Plus+ Company has grown from a small, direct-sales company into a highly successful, privately held health and wellness company operatinLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                    <ul className="py-5">
                        <li className="text-lg font-medium py-2 text-[#5e5e5e]"><FontAwesomeIcon className="text-[#de9190] font-semibold text-2xl" icon={faCheck} /> Cras at mi luctus, tincidunt urna eu, posuere enim</li>
                        <li className="text-lg font-medium py-2 text-[#5e5e5e]"><FontAwesomeIcon className="text-[#de9190] font-semibold text-2xl" icon={faCheck} />Vivamus elementum lorem vitae quam tincidunt</li>
                        <li className="text-lg font-medium py-2 text-[#5e5e5e]"><FontAwesomeIcon className="text-[#de9190] font-semibold text-2xl" icon={faCheck} />Vivamus elementum lorem vitae quam tincidunt</li>

                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                {/* Big card spanning 2 rows */}
                <div className="row-span-2">
                    <CardOverlay
                        img="https://foodily.vercel.app/assets/images/gallery/19.jpg"
                        title="Cornish cod fillet"
                        content="Us percipit urbanitas referrentur ea."
                    />
                </div>

                {/* Normal cards */}
                <CardOverlay
                    img="https://foodily.vercel.app/assets/images/gallery/20.jpg"
                    title="Cornish cod fillet"
                    content="Us percipit urbanitas referrentur ea."
                />
                <CardOverlay
                    img="https://foodily.vercel.app/assets/images/gallery/21.jpg"
                    title="Cornish cod fillet"
                    content="Us percipit urbanitas referrentur ea."
                />
                <CardOverlay
                    img="https://foodily.vercel.app/assets/images/gallery/22.jpg"
                    title="Cornish cod fillet"
                    content="Us percipit urbanitas referrentur ea."
                />
                <CardOverlay
                    img="https://foodily.vercel.app/assets/images/gallery/23.jpg"
                    title="Cornish cod fillet"
                    content="Us percipit urbanitas referrentur ea."
                />
                <div className="col-span-2">
                    <CardOverlay
                        img="https://foodily.vercel.app/assets/images/gallery/24.jpg"
                        title="Cornish cod fillet"
                        content="Us percipit urbanitas referrentur ea."
                    />
                </div>
            </div>
              {/* staff image section */}
            <div className="staff-section md:p-[80px] p-5 space-y-10">
                <div className="flex flex-col justify-center text-center md:pt-10">
                    <p className="font-lillybelle text-2xl capitalize pb-2 textGrey">Our most valuable asset</p>
                    <h3 className="md:text-6xl font-medium leading-16 text-[#3a3838]">Friendly Staff</h3>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-3 space-x-10">
                    <CardImgOverlay 
                    img="https://foodily.vercel.app/assets/images/resource/staff-1.jpg"
                    title="Jusica Malina"
                    content="Pastry Chef"
                    />
                    <CardImgOverlay 
                    img="https://foodily.vercel.app/assets/images/resource/staff-2.jpg"
                    title="Jusica Malina"
                    content="Pastry Chef"
                    />
                    <CardImgOverlay 
                    img="https://foodily.vercel.app/assets/images/resource/staff-3.jpg"
                    title="Jusica Malina"
                    content="Pastry Chef"
                    />
                </div>
                
            </div>

             {/* testimonial section */}
                <div className="flex  justify-center flex-col text-center md:pt-10">
                    <p className="md:text-2xl  textGrey font-lillybelle">Testimonial</p>
                    <h1 className="md:text-7xl text-2xl text-black font-semibold ">What People Say</h1>
                    <div className="flex justify-center">
                        <div className=" mt-5  w-[100px] h-[50px] bg-[url('./assets/images/small-flower.png')] bg-no-repeat"></div>
                    </div>
                    <div className="author-box flex  justify-center">
                        <img src="https://foodily.vercel.app/assets/images/resource/author-1.jpg" className="w-[120px] h-[120px] rounded-full " alt="" />
                       
                    </div>
                     <div className="container mx-auto md:p-[90px] p-10">
                        <blockquote className="text-[#5e5e5e] text-lg">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos distinctio facilis eligendi odit eveniet totam nemo quos veritatis. Numquam asperiores veniam commodi deserunt, mollitia perspiciatis inventore! Quasi, nihil quae"</blockquote>
                        <h1 className="textGrey font-medium pt-5">Meridith Grant - <span className="text-[#5e5e5e]">Host Mother</span></h1>
                     </div>
                </div>

            <div className=" relative md:mb-[100px]">
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