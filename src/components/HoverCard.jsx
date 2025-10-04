export default function HoverCard({ img, btn, title, date, comments, share }) {
  return (
    <div className="innerCard md:p-2 p-10">
      <div className="rounded-xl md:p-2 p-10 shadow-2xl h-[500px] overflow-hidden hover:scale-105 transition-transform duration-500 hover:text-[#91ad41]">
        
        {/* Image */}
        <img src={img} alt={title} className="w-full h-64 object-cover rounded-t-xl" />

        {/* Content */}
        <div className="md:p-[50px] flex flex-col gap-3 ">
          <button className="mt-2 capitalize px-4 py-2 bg-[#91ad41] text-white rounded-lg shadow-md hover:bg-[#91ad41]">
            {btn}
          </button>

          <h1 className="text-2xl font-semibold capitalize">{title}</h1>

          <div className="flex justify-between text-sm text-gray-600 capitalize">
            <p>{date}</p>
            <p >{comments}</p>
            <small >{share}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
