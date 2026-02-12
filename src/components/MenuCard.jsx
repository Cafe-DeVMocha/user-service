import { Link } from "react-router-dom"
import sanwidtch from "../assets/sanwidtch.jpg"
import { useState } from "react";
import { easeIn, easeInOut, motion } from "framer-motion"


export default function MenuCard({ imgUrl, title, description, pageUrl }) {

    const [url, setUrl] = useState("")

    const handleClick = () => {
        setUrl(pageUrl);
    }


    return (
        <motion.div id="menu-card" className="w-full  max-w-md mx-auto hover:scale-102 duration-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 2, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
                y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                opacity: { duration: 0.6 }
            }}

        >
            <div className="flex flex-col p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-2xl shadow-md ">
                <div className="w-full">
                    <img src={imgUrl} className="w-full aspect-square object-cover rounded-2xl" />
                </div>

                <div className="mt-2">
                    <p className="text-xl tracking-widest sm:text-2xl text-center lg:text-3xl font-semibold ">{title}</p>
                </div>

                <div className="mt-5">
                    <p className="text-sm sm:text-base text-gray-600 text-justify line-clamp-8">
                        {description}
                    </p>
                </div>

                <div className="mt-5">
                    <Link to={url}>
                        <button className="w-25 h-12 text-xl font-serif tracking-wide  rounded-xl  bg-blue-700 hover:bg-blue-600 hover:duration-100
                        active:scale-95 duration-100 text-md text-white" onClick={handleClick}>Order</button>
                    </Link>

                </div>
            </div>
        </motion.div>
    )
}