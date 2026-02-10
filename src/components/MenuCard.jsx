import sanwidtch from "../assets/sanwidtch.jpg"
export default function MenuCard(){


    return(
        <div id="menu-card" className="w-full max-w-md mx-auto">
            <div className="flex flex-col p-4 sm:p-6 lg:p-8 bg-gray-200 rounded-2xl shadow-md ">
                <div className="w-full">
                    <img src={sanwidtch} className="w-full aspect-square object-cover rounded-2xl"/>
                </div>

                <div className="mt-2">
                    <p className="text-xl sm:text-2xl text-center lg:text-3xl font-semibold ">Sandwiches & Wraps</p>
                </div>

                <div className="mt-5">
                    <p className="text-sm sm:text-base text-gray-600 text-justify line-clamp-8">
                        Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.
                    </p>
                </div>
            </div>
        </div>
    )
}