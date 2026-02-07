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

        <div className=" bg-blue-950 text-gray-300">

            <div className="flex flex-col gap-3 bg-gray-900 lg:flex-row  lg:items-center lg:justify-between  lg:px-12 items-center">
                <div className=" text-xs py-2">
                    <Logo />
                </div>

                <nav className=" flex font-serif text-sm gap-5 pb-2 md:text-md lg:gap-8 sm:gap-8 ">
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

                <div className="hidden lg:flex  lg:gap-5" >

                    < a href="https://web.facebook.com/"><FacebookIcon fontSize="medium" /></a>
                    < a href="https://www.linkedin.com/"><LinkedInIcon fontSize="medium" /></a>
                    < a href="https://www.instagram.com/"><InstagramIcon fontSize="medium" /></a>
                    < a href="https://x.com/"><TwitterIcon fontSize="medium" /></a>
                </div>

                <div className="hidden lg:flex">
                    <img src={user.profilePic} className={`w-auto h-3 rounded-4xl sm:h-20 lg:h-8 lg:w-8  `} alt="profile img"/>
                </div>

            </div>



        </div>
    )
}