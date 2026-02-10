import sanwidtch from "../assets/sanwidtch.jpg"


export default function MenuCard({imgUrl, title, description}){


    return(
        <div id="menu-card" className="w-full max-w-md mx-auto hover:scale-102 hover:duration-1100 transition-shadow ">
            <div className="flex flex-col p-4 sm:p-6 lg:p-8 bg-gray-200 rounded-2xl shadow-md ">
                <div className="w-full">
                    <img src={imgUrl} className="w-full aspect-square object-cover rounded-2xl"/>
                </div>

                <div className="mt-2">
                    <p className="text-xl sm:text-2xl text-center lg:text-3xl font-semibold ">{title}</p>
                </div>

                <div className="mt-5">
                    <p className="text-sm sm:text-base text-gray-600 text-justify line-clamp-8">
                       {description}
                    </p>
                </div>
            </div>
        </div>
    )
}