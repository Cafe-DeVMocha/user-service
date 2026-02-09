import MenuCard from "../components/MenuCard";


export default function Menu () {
    return(
        <div id="menu-section">
            <div className="flex flex-col">
                <div className="flex justify-center ">
                    <text className="p-2 mt-10 lg:text-5xl  text-xl tracking-widest font-mono text-gray-50 border-amber-50 bg-red-800">DevMocha</text>
                    <text className="p-2 mt-10 lg:text-5xl text-xl tracking-wide font-mono">Delights</text>
                </div>

                <div className="pt-30">
                    <MenuCard />
                </div>
            </div>
        </div>
    )
}