import { Link } from "react-router-dom"
import sanwidtch from "../assets/sanwidtch.jpg"
import { useState } from "react";


export default function MenuCard({ imgUrl, title, description, pageUrl }) {

    const [url, setUrl] = useState("")

    const handleClick = () =>{
         setUrl(pageUrl);
    }


    return (
        <div id="menu-card" className="w-full max-w-md mx-auto hover:scale-102 duration-200 ">
            <div className="flex flex-col p-4 sm:p-6 lg:p-8 bg-gray-100 rounded-2xl shadow-md ">
                <div className="w-full">
                    <img src={imgUrl} className="w-full aspect-square object-cover rounded-2xl" />
                </div>

                <div className="mt-2">
                    <p className="text-xl sm:text-2xl text-center lg:text-3xl font-semibold ">{title}</p>
                </div>

                <div className="mt-5">
                    <p className="text-sm sm:text-base text-gray-600 text-justify line-clamp-8">
                        {description}
                    </p>
                </div>

                <div className="mt-5">
                    <Link to={url}>
                        <button className="w-20 h-10 rounded-xl  bg-blue-700 hover:bg-blue-600 hover:duration-100
                        active:scale-95 duration-100 text-md text-white" onClick={handleClick}>Order</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}