import { useUser } from "../context/userContext"

export default function Header() {

    const {user} = useUser();
    return (

        <div className=" bg-gray-900 text-gray-300">

            <div className="flex items-center justify-between px-5 py-6 lg:px-16">
                <div className="text-xl  font-bold">
                    logo
                </div>

                <nav className="text-lg  md:flex sm:px-6 sm:gap-2 gap-6">  
                    <a href="#home">Home</a>
                    <a href="#About Us">About Us</a>
                    <a href="#Menu">Menu</a>
                    <a href="#Order">Order</a>
                    <a href="#Contact Us">Contact Us</a>
                </nav>
                    
                <div className="hidden md:flex gap-4" >
                    < a href="#">LinkedIn</a>
                    < a href="#">LinkedIn</a>
                    < a href="#">LinkedIn</a>
                    < a href="#">LinkedIn</a>
                </div>

                <div className="sm:px-10 md:block">
                   <p>{user.name}</p>
                </div>
            </div>

        </div>
    )
}