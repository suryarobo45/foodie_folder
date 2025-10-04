import jar from "../assets/images/jarjuice.png";
import pattern from "../assets/images/pattern-1.png";
import strwbery from "../assets/images/strawbery.png";
import bootleJuice from "../assets/images/botle-juice.png";
import flowerPatern from "../assets/images/patern-flower.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import HoverCard from "../components/HoverCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {


    const cards = [
        {
            title: "MilkShake",
            content: "3 Products",
            img: "https://foodily.vercel.app/assets/images/resource/beverage-1.jpg"
        },
        {
            title: "Frappe",
            content: "3 Products",
            img: "https://foodily.vercel.app/assets/images/resource/beverage-2.jpg"
        },
        {
            title: "Bapa Drinks",
            content: "3 Products",
            img: "https://foodily.vercel.app/assets/images/resource/beverage-3.jpg"
        },
        {
            title: "Mojito",
            content: "3 Products",
            img: "https://foodily.vercel.app/assets/images/resource/beverage-4.jpg"
        },
        {
            title: "Slushy",
            content: "3 Products",
            img: "https://foodily.vercel.app/assets/images/resource/beverage-5.jpg"
        },
        {
            title: "Hot Chocolate",
            content: "3 Products",
            img: "https://foodily.vercel.app/assets/images/resource/beverage-6.jpg"
        },
        {
            title: "Smoothie",
            content: "3 Products",
            img: "https://foodily.vercel.app/assets/images/resource/beverage-7.jpg"
        },
        {
            title: "Coffee",
            content: "3 Products",
            img: "https://foodily.vercel.app/assets/images/resource/beverage-8.jpg"
        },
    ]

    const HoverCards = [
        {
            img:"https://foodily.vercel.app/assets/images/resource/news-1.jpg",
            title:"broad beans and goats cheese bruschetta",
            btn:"smoothy",
            date:"may 21,2021",
            comments:"2 comments",
            share:"share"
        },
         {
            img:"https://foodily.vercel.app/assets/images/resource/news-2.jpg",
            title:"broad beans and goats cheese bruschetta",
            btn:"smoothy",
            date:"may 21,2021",
            comments:"2 comments",
            share:"share"
        },
         {
            img:"https://foodily.vercel.app/assets/images/resource/news-3.jpg",
            title:"broad beans and goats cheese bruschetta",
            btn:"smoothy",
            date:"may 21,2021",
            comments:"2 comments",
            share:"share"
        },
    ]
    return (
        <>
            <section className="relative to-5%  bg-[#beb996] text-white">
                {/* Hero Section */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-16 px-5 gap-8">
                    {/* Left Content */}
                    <div className="relative" >
                       
                        <motion.h1 initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }} className="font-lillybelle md:text-9xl text-4xl leading-tight relative z-10">
                            Healthy <br /> Smoothy
                        </motion.h1>
                        <motion.p initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:2}} className="py-4 text-xl relative z-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </motion.p>

                        <Button className="hover:bg-green-600 leading-[40px] hover:text-black "><span className="inline-block bg-no-repeat bg-[url('https://foodily.vercel.app/_next/static/media/btn-icon.47c5e4ab.png')] w-[48px] h-[48px] px-2 leading-7 rounded-full  float-left bg-white mr-5"></span>Buy Now</Button>

                        {/* Strawberry behind text */}
                        <img
                            className="absolute bottom-0 left-0 w-[300px] z-0"
                            src={strwbery}
                            alt="Strawberry"
                        />
                    </div>


                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img src={jar} alt="Smoothy Jar" className="w-3/4 md:w-full" />
                    </div>
                </div>

                {/* Pattern Section */}
                <div className="w-full">
                    <img src={pattern} alt="Pattern Background" className="w-full object-cover" />
                </div>



            </section>
            <section className="juice-section bg-white ">
                <div className="grid md:grid-cols-2 grid-cols-1 ]">
                    <div className="col-span-1 bg-[url('./assets/images/patern-flower.png')] bg-no-repeat">
                        <img src={bootleJuice} alt="" />
                    </div>
                    <div className=" text-black col-span-1 md:p-[50px] p-5 bg-[url('./assets/images/juice-glass-patern.png')] bg-no-repeat">
                        <p style={{ fontFamily: "'Nicone', cursive" }} className=" text-[#beb996] text-xl">
                            Drink for Health
                        </p>
                        <h1 className="text-black lg:text-6xl text-xl font-medium">Fresh Fruit <span className="text-[#de9190]">Juices</span></h1>
                        <div className=" mt-5 realtive w-[100px] h-[50px] bg-[url('./assets/images/small-flower.png')] bg-no-repeat"></div>
                        <p className="text-xl leading-8 text-[#5e5e5e]">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint atqui voluptatibus an, pro ne malis semper perpetua.</p>
                        <Button className="border border-[#de9190] hover:bg-[#de9190] hover:text-white leading-[40px]  bg-white " > <span className="inline-block bg-no-repeat bg-[#de9190] bg-blend-multiply bg-[url('https://foodily.vercel.app/_next/static/media/btn-icon.47c5e4ab.png')] w-[48px] h-[48px] px-2 leading-7 rounded-full   float-left  hover:bg-white mr-5"></span> Buy Now</Button>
                    </div>
                </div>
            </section>

            {/* collection card */}
            <section className="bg-white ">
                <div className="text-center md:mb-5">
                    <p style={{ fontFamily: "'Nicone', cursive" }} className=" text-[#beb996] text-3xl md:text-2xl">
                        Best For You
                    </p>
                    <h2 className="text-black font-semibold md:text-6xl text-2xl">Our Beverage</h2>
                    <div className="flex justify-center">
                        <div className=" mt-5  w-[100px] h-[50px] bg-[url('./assets/images/small-flower.png')] bg-no-repeat"></div>
                    </div>
                </div>
                <div className="relative">
                    {/* Background image */}
                    <div className="bg-[url('https://foodily.vercel.app/assets/images/resource/beverage.png')] 
                  bg-no-repeat bg-contain w-[220px] h-[270px] top-[-50px] left-0 absolute z-[1]">
                    </div>

                    {/* Cards grid */}
                    <div className="p-5 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2  gap-7 relative z-[2]">
                        {cards.map((card, i) => (
                            <div key={i}>
                                <Card {...card} />
                              
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Button className="border text-black font-medium border-[#de9190] hover:bg-[#de9190] hover:text-white leading-[40px]  bg-white "><span className="inline-block bg-no-repeat bg-[#de9190] bg-blend-multiply bg-[url('https://foodily.vercel.app/_next/static/media/btn-icon.47c5e4ab.png')] w-[48px] h-[48px] px-2 leading-7 rounded-full   float-left  hover:bg-white mr-5"></span> View All Products</Button>
                    </div>
                </div>
            </section>

            <section className="relative ">
                <div className="bg-[url('https://foodily.vercel.app/assets/images/background/pattern-1.png')] bg-no-repeat absolute w-full h-[164px] "></div>
                <div className="grid md:grid-cols-2 grid-cols-1 bg-[url('https://foodily.vercel.app/assets/images/background/2.jpg')] bg-no-repeat bg-fixed bg-cover ">
                    <div className="relative top-[10px] md:mb-10 mb-[50px]">
                        <div className="inner_round md:ml-[40px] m-[10px] bg-[#beb996]/90 md:w-[750px] md:h-[750px] md:rounded-full rounded-xl relative ">
                            <div className="inner-box-content md:absolute md:top-[80px]  md:pt-[40px] p-[20px] md:m-[50px] m-[10px] text-center ">
                                <p style={{ fontFamily: "'Nicone', cursive" }} className="text-[#555130] text-xl pb-4">
                                    30% Off For juice
                                </p>
                                <h1 className="text-white md:text-5xl font-medium text-2xl pb-3">Big Deals of the Week</h1>
                                <p className="pt-3 text-xl">
                                    Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan.
                                </p>
                                <p className="pt-3 text-2xl font-medium pb-3">To Get New Of Our Deals</p>
                                <div className="form-group relative">
                                    <input
                                        type="text"
                                        className="md:p-[20px] p-[10px] md:w-[450px] w-[300px] border rounded-3xl mt-2 focus:border-red-600 focus:outline-none focus:outline-red-800"
                                        placeholder="Type Your Email"
                                    /> <button className="absolute md:right-23 md:top-8 top-5 right-[150px]">
                                        <span className="bg-white md:p-4 p-2  rounded-full  text-red-500"><FontAwesomeIcon icon={faPaperPlane} /></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="relative md:bottom-[150px] bg-[url('https://foodily.vercel.app/assets/images/background/pattern-2.png')] bg-no-repeat  bg-cover  w-full h-[164px] "></div>
            </section>

            <section className="receipe-section bg-white ">
                <div className="flex flex-col  justify-center text-center text-black relative">
                    <div className="bg-[url('https://foodily.vercel.app/assets/images/icons/icon-1.png')] bg-no-repeat bg-contain bg-center absolute top-[20px] left-[50px] w-[287px] h-[164px] z-10 md:block hidden"></div>
                    <div className="bg-[url('https://foodily.vercel.app/assets/images/icons/icon-2.png')] bg-no-repeat bg-contain bg-center absolute top-[0px] right-[181px] w-[287px] h-[164px] z-10 md:block hidden"></div>
                    <p className="font-lillybelle  text-xl pb-4 text-[#beb996]">
                        Best For You
                    </p>
                    <h3 className="md:text-6xl font-medium text-3xl text-[#27272f]">Detox Smoothie Recipe</h3>
                    <div className="flex justify-center">
                        <div className=" mt-5 realtive w-[100px] h-[50px] bg-[url('./assets/images/small-flower.png')] bg-no-repeat"></div>
                    </div>
                </div>
                <div className="inner-container relative">
                    {/* Background decorative circles */}
                    <div className="bg-[url('https://foodily.vercel.app/assets/images/icons/circles.png')] 
                  md:w-[540px] md:h-[427px] 
                  bg-no-repeat absolute 
                  md:left-1/2 md:top-[290px] 
                  -translate-x-1/2 -translate-y-1/2">
                    </div>

                    {/* Main Grid */}
                    <div className="grid md:grid-cols-5 grid-cols-1 items-center gap-8">

                        {/* Left side - Two recipe blocks stacked */}
                        <div className="md:col-span-2 col-span-12 justify-center items-center text-center flex flex-col md:gap-10 gap-10 ">

                            {/* Block 1  */}
                            <div className="flex item-center gap-6 ">
                                <div>
                                    <h1 className="text-3xl">Cucumber</h1>
                                    <p>
                                        Us percipit urbanitas referrentur ea. <br />
                                        Mei at numquam molestiae
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="w-[90px] h-[90px] bg-amber-600 rounded-full absolute left-2 top-2"></div>
                                    <img
                                        src="https://foodily.vercel.app/assets/images/resource/recipe-1.png"
                                        alt="Cucumber"
                                        className="relative z-[1]"
                                    />
                                </div>
                            </div>

                            {/* Block 2 */}
                            <div className="flex items-center gap-6 relative md:top-[80px] ">
                                <div>
                                    <h1 className="text-3xl">Apple</h1>
                                    <p>
                                        Us percipit urbanitas referrentur ea. <br />
                                        Mei at numquam molestiae
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="w-[90px] h-[90px] bg-amber-600 rounded-full absolute left-2 top-2"></div>
                                    <img
                                        src="https://foodily.vercel.app/assets/images/resource/recipe-2.png"
                                        alt="Apple"
                                        className="relative z-[1]  mx-auto"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Center image */}
                        <div className="col-span-1 relative">
                            <img
                                src="https://foodily.vercel.app/assets/images/resource/recipe.png"
                                alt="Recipe"
                                className="mx-auto md:block hidden"
                            />
                        </div>

                        {/* Right side - Two recipe blocks stacked */}
                        <div className="md:col-span-2 col-span-12 justify-center text-center flex flex-col md:gap-10 ">

                            {/* Block 1 -  */}
                            <div className="flex items-center gap-6 ">
                                <div className="relative">
                                    <div className="w-[90px] h-[90px] bg-amber-600 rounded-full absolute md:left-2 md:top-2 top-2 right-2"></div>
                                    <img
                                        src="https://foodily.vercel.app/assets/images/resource/recipe-3.png"
                                        alt="Lemon"
                                        className="relative z-[1]"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl">Lemon</h1>
                                    <p>
                                        Us percipit urbanitas referrentur ea. <br />
                                        Mei at numquam molestiae
                                    </p>
                                </div>
                            </div>

                            {/* Block 2 - Orange (example new block) */}
                            <div className="flex items-center gap-6 relative top-[80px]">
                                <div className="relative">
                                    <div className="w-[90px] h-[90px] bg-amber-600 rounded-full absolute md:left-2  top-2"></div>
                                    <img
                                        src="https://foodily.vercel.app/assets/images/resource/recipe-4.png"
                                        alt="Orange"
                                        className="relative z-[1] mx-auto"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl">Fresh Water</h1>
                                    <p>
                                        Us percipit urbanitas referrentur ea. <br />
                                        Mei at numquam molestiae
                                    </p>
                                </div>
                            <div className="bg-[url('https://foodily.vercel.app/assets/images/icons/icon-3.png')] absolute md:top-3/2 md:left-[80px] w-[500px] h-[500px] bg-no-repeat md:block hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="relative md:top-[200px] top-[100px]">
                {/* upcoming content blog */}
                <div className="grid md:grid-cols-12 grid-cols-2">
                    <div className="col-span-5 md:p-15 p-10 bg-[#f7eee2] relative">
                        <h1 className="text-black font-medium md:text-7xl text-2xl ">Upcoming Our Beverage</h1>
                        <p className="pt-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Button className="bg-transparent border  text-black font-medium border-[#de9190] hover:bg-[#de9190] hover:text-white leading-[40px]  "><span className="inline-block bg-no-repeat bg-[#de9190] bg-blend-multiply bg-[url('https://foodily.vercel.app/_next/static/media/btn-icon.47c5e4ab.png')] w-[48px] h-[48px] px-2 leading-7 rounded-full   float-left  hover:bg-white mr-5"></span> All Product</Button>
                        <img src="https://foodily.vercel.app/assets/images/icons/icon-4.png" className="absolute md:bottom-[-80px] md:block hidden" alt="" />
                    </div>
                    <div className="col-span-2 relative bg-[#f7eee2]">
                        <div className="bg-[url('https://foodily.vercel.app/_next/static/media/pattern-3.feea66c5.png')] bg-no-repeat absolute h-[100%] w-[154px]  left-[200px]"></div>
                    </div>
                    <div className="col-span-5">
                        <img src="https://foodily.vercel.app/assets/images/resource/image-1.jpg" className="mx-auto h-full" alt="" />
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

                {/* news And Recepie Section */}

                <div className="flex justify-center flex-col text-center relative">
                    <p className="textGrey md:text-2xl font-lillybelle">news & Recepie</p>
                    <div className="absolute top-0 z-[-1] mt-5  w-[500px] h-[500px] bg-[url('https://foodily.vercel.app/assets/images/background/pattern-5.png')] bg-no-repeat"></div>
                    <h1 className="text-[#27272f] md:text-7xl text-3xl font-semibold">Our Fruitsome Blog</h1>
                    <div className="flex justify-center">
                        <div className=" mt-5  w-[100px] h-[50px] bg-[url('./assets/images/small-flower.png')] bg-no-repeat"></div>
                    </div>
                    <h1 className="text-[#5e5e5e] text-lg">Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, <br />
                        vel scelerisque nisl consectetur et.</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                    {HoverCards.map((card, index) => (
                        <HoverCard key={index} {...card} />
                    ))}
                </div>
                <div className="grid grid-cols-5">
                    <img src="https://foodily.vercel.app/assets/images/gallery/1.jpg" className="mx-auto relative" alt="" />
                    <img src="https://foodily.vercel.app/assets/images/gallery/2.jpg" alt="" />
                    <img src="https://foodily.vercel.app/assets/images/gallery/3.jpg" alt="" />
                    <img src="https://foodily.vercel.app/assets/images/gallery/4.jpg" alt="" />
                    <img src="https://foodily.vercel.app/assets/images/gallery/5.jpg" alt="" />
                </div>

            </section>

            
            
        </>

    );
}
