import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function CardImgOverlay({ img, title, content }) {
  return (
    <div className="card-outer rounded-2xl overflow-hidden shadow-lg">
      <div className="innerCard relative group mx-auto">
        {/* Image */}
        <img src={img} className="w-full h-[600px]  object-cover filter grayscale hover:grayscale-0 transition-all duration-500" alt={title} />

        {/* Hover Overlay */}
        <div
          className="absolute bottom-0 left-0 w-full bg-white text-black p-6
                     transform translate-y-full group-hover:translate-y-0
                     opacity-0 group-hover:opacity-100
                     transition-all duration-300 ease-in-out h-[200px]"
        >
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm mb-4">{content}</p>

          {/* Social Icons */}
          <ul className="flex flex-row space-x-5 text-xl">
            <li className="hover:text-pink-600 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li className="hover:text-blue-600 transition">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="hover:text-sky-400 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
