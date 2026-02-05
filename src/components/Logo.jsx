import { useState } from "react"
import logoImg from "../assets/logo.png"

export const Logo = (props) =>{
    const [logo,setLogo] = useState(logoImg);

    return(
        <img src={logo} height={props.height} width={props.width} alt="logo img" />
    );
} 