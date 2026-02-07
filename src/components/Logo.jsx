import { useState } from "react"
import logoImg from "../assets/logo.png"

export const Logo = ({className}) =>{
    const [logo,setLogo] = useState(logoImg);

    return(
        <img src={logo} className={`w-auto h-10 sm:h-20 md:h-20 lg:h-20 ${className}`} alt="logo img" />
    );
} 