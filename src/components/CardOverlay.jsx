export default function CardOverlay({img,title,content}){
    return(
        <div className="card-outer">
            <div className="innerCard relative group  mx-auto">
                <img src={img} className="w-full object-cover" alt="" />
                <div className="absolute bottom-0 left-0 w-full bg-white text-black p-10 
                     transform translate-y-full group-hover:translate-y-0 
                     opacity-0 group-hover:opacity-100
                     transition-all duration-300 ease-in-out h-1/2">
                    <h1 className="text-2xl ">{title}</h1>
                    <p className="">{content}</p>
                </div>
            </div>
        </div>
    )
}