import { useUser } from "../context/userContext"
import { Logo } from "./Logo";


export default function Header() {

    const {user} = useUser();
    return (

        <div className=" bg-gray-900 text-gray-300">

            <div className="flex items-center justify-between lg:py-8 lg:px-12  sm:py-7 sm:flex-col md:flex-row">
                <div className="text-xs font-bold m-1">
                    
                    <Logo height="10px" width="100px" />
                </div>

                <nav className="flex sm:px-1 sm:py-2 sm:gap-3 md:gap-6">  
                    <a href="#home">Home</a>
                    <a href="#About Us">About Us</a>
                    <a href="#Menu">Menu</a>
                    <a href="#Order">Order</a>
                    <a href="#Contact Us">Contact Us</a>
                </nav>
                    
                <div className="hidden md:flex md:gap-4" >
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