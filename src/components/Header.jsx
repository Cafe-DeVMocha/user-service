import SvgIcon from "@mui/icons-material/Facebook";
import { useUser } from "../context/userContext"
import { Logo } from "./Logo";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from "react-router-dom";


export default function Header() {



    const { user } = useUser();
    return (

        <div className=" bg-gray-900 text-gray-300">

            <div className="flex items-center justify-between lg:py-3 lg:px-12  sm:py-7 sm:flex-col md:flex-row">
                <div className="text-xs font-bold m-1">

                    <Logo height="10px" width="130px" />
                </div>

                <nav className="flex sm:px-2 sm:py-2 sm:gap-3 md:gap-10 md:text-2xl font-serif">
                    <NavLink to="/home" className={({ isActive }) =>
                        isActive ?
                            "text-gray-100 font-bold scale-120 hover:scale-140 transition-trasform duration-300  animate-bounce"
                            : "text-gray-200 font-medium hover:scale-130 duration-150 "}>
                        Home
                    </NavLink>

                   <NavLink to="/about-us" className={({ isActive }) =>
                        isActive ?
                            "text-gray-100 font-bold scale-120 hover:scale-140 transition-trasform duration-300  animate-bounce"
                            : "text-gray-200 font-medium hover:scale-130 duration-150 "}>
                        About Us
                    </NavLink>

                    <NavLink to="/menu" className={({ isActive }) =>
                        isActive ?
                            "text-gray-100 font-bold scale-120 hover:scale-140 transition-trasform duration-300  animate-bounce"
                            : "text-gray-200 font-medium hover:scale-130 duration-150 "}>
                        Menu
                    </NavLink>
                    <NavLink to="/orders" className={({ isActive }) =>
                        isActive ?
                            "text-gray-100 font-bold scale-120 hover:scale-140 transition-trasform duration-300  animate-bounce"
                            : "text-gray-200 font-medium hover:scale-130 duration-150 "}>
                        Orders
                    </NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) =>
                        isActive ?
                            "text-gray-100 font-bold scale-120 hover:scale-140 transition-trasform duration-300  animate-bounce"
                            : "text-gray-200 font-medium hover:scale-130 duration-150 "}>
                        Contact Us
                    </NavLink>
                    
                </nav>

                <div className="hidden md:flex md:gap-4" >

                    < a href="https://web.facebook.com/"><FacebookIcon fontSize="large" /></a>
                    < a href="https://www.linkedin.com/"><LinkedInIcon fontSize="large" /></a>
                    < a href="https://www.instagram.com/"><InstagramIcon fontSize="large" /></a>
                    < a href="https://x.com/"><TwitterIcon fontSize="large" /></a>
                </div>

                <div className="sm:px-10 md:block">
                    <p>{user.name}</p>
                </div>
            </div>

        </div>
    )
}