import MenuCard from "../components/MenuCard";


export default function Menu () {
    return(
        <div id="menu-section">
            <div className="flex flex-col">
                <div className="flex justify-center ">
                    <text className="p-2 mt-10 lg:text-5xl  text-xl tracking-widest font-mono text-gray-50 border-amber-50 bg-red-800">DevMocha</text>
                    <text className="p-2 mt-10 lg:text-5xl text-xl tracking-wide font-mono">Delights</text>
                </div>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-1 m-4 gap-2 gap-y-8">
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </div>
            </div>
        </div>
    )
}