import MenuCard from "../components/MenuCard";
import sanwidtch from "../assets/sanwidtch.jpg"

const menuItems = [
    {
        url:sanwidtch,
        title: "Sandwiches & Wraps",
        description:`Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.`
    },
    {
        url:sanwidtch,
        title: "Sandwiches & Wraps",
        description:`Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.`
    },
    {
        url:sanwidtch,
        title: "Sandwiches & Wraps",
        description:`Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.`
    },{
        url:sanwidtch,
        title: "Sandwiches & Wraps",
        description:`Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.`
    },{
        url:sanwidtch,
        title: "Sandwiches & Wraps",
        description:`Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.`
    },
    {
        url:sanwidtch,
        title: "Sandwiches & Wraps",
        description:`Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.`
    }
]


export default function Menu () {
    return(
        <div id="menu-section">
            <div className="flex flex-col">
                <div className="flex justify-center ">
                    <text className="p-2 mt-10 lg:text-5xl  text-xl tracking-widest font-mono text-gray-50 border-amber-50 bg-red-800">DevMocha</text>
                    <text className="p-2 mt-10 lg:text-5xl text-xl tracking-wide font-mono">Delights</text>
                </div>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-1 m-4 gap-2 gap-y-8">
                    {
                        menuItems.map((item,index) => {
                            return(
                                <MenuCard key={index}
                                imgUrl={item.url}
                                title={item.title}
                                description={item.description}
                                 />
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}