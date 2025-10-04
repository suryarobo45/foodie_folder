import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faChrome, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-black text-white relative top-[200px] md:p-[100px] p-10">
            {/* Background Patterns */}
            <div className="bg-[url('https://foodily.vercel.app/assets/images/background/pattern-6.png')] bg-no-repeat absolute left-0 top-0 w-full h-[200px]"></div>
            <div className="bg-[url('https://foodily.vercel.app/assets/images/resource/footer-pattern-1.png')] bg-no-repeat absolute left-0 top-[100px] w-[500px] z-10 h-[300px]"></div>
            <div className="bg-[url('https://foodily.vercel.app/assets/images/resource/footer-pattern-2.png')] 
                bg-no-repeat bg-right-top bg-contain 
                absolute right-0 top-0 w-1/2 h-full z-10">
            </div>

            {/* Footer Content */}
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6 relative z-20">
                
                {/* Contact Section */}
                <div className="contact-links capitalize space-y-5">
                    <h1 className="text-xl font-semibold">Contact us</h1>
                    <div className="w-1/4 bg-white h-[2px]"></div>
                    <small className="text-lg pb-2">
                        6 Fifth Avenue 5501, Broadway, New York <br />
                        Morris Street, London 1234
                    </small>

                    <ul className="space-y-4">
                        <li>
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                            surya@gmail.com
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            (123) 4567 89000
                        </li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="contact-links capitalize space-y-5">
                    <h1 className="text-xl font-semibold">Useful Links</h1>
                    <div className="w-1/4 bg-white h-[2px]"></div>
                    <ul className="space-y-4 text-lg">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Terms Of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="contact-links capitalize space-y-5">
                    <h1 className="text-xl font-semibold">Follow Us Now</h1>
                    <div className="w-1/4 bg-white h-[2px]"></div>
                    <ul className="space-y-4 text-lg">
                        <li><FontAwesomeIcon icon={faFacebook} className="mr-2"/> Facebook</li>
                        <li><FontAwesomeIcon icon={faTwitter} className="mr-2"/> Twitter</li>
                        <li><FontAwesomeIcon icon={faInstagram} className="mr-2"/> Instagram</li>
                        <li><FontAwesomeIcon icon={faChrome} className="mr-2"/> Dribbble</li>
                    </ul>
                </div>

                {/* subscribe */}
                <div className="contact-links capitalize space-y-5">
                    <h1 className="text-xl font-semibold">Subscribe</h1>
                    <div className="w-1/4 bg-white h-[2px]"></div>
                    <ul className="space-y-4 text-lg">
                        <li><input type="text" className="p-4 border outline-none border-white" placeholder="Your Email" /></li>
                        <li><button className="p-4 bg-green-400 w-3/4">Subscribe Now</button></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
