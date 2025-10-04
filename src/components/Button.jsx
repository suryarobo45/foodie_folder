export default function Button({type="button",className="",children,onClick}){
    return(
        <button type={type} onClick={onClick}
            className={`px-4 text-xl py-3 my-1 inline-block bg-[#de9190] rounded-4xl transition duration-300 ease-in-out  relative z-10 ${className}`}>
            {children}
        </button>
    );
}