import { Link } from "react-router-dom";

export default function Card({ img, title, content }) {
  return (
    <div className="innerbox ">
      {/* Image */}
      <div className="rounded-2xl h-[450px] overflow-hidden   bg-white  transition duration-300">
        <img
          src={img}
          alt={title}
          className="w-full  object-cover transform transition-transform duration-700 hover:scale-110 hover:translate-y-1"
        />
      </div>

      {/* Content */}
      <div className="lowerContent p-4 ">
        <h1 className="text-black hover:text-[#de9190] font-medium text-2xl py-2 text-center">
          <Link>{title}</Link>
        </h1>
        <p className="text-[#777] text-center">{content}</p>
      </div>
    </div>
  );
}
