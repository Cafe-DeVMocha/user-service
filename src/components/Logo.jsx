import { useState } from "react"
import logoImg from "../assets/logo.png"

export const Logo = ({className}) =>{
    const [logo,setLogo] = useState(logoImg);

    return(
        <img src={logo} className={`w-auto h-20 md:h-20 lg:h-10 ${className}`} alt="logo img" />
    );
} 