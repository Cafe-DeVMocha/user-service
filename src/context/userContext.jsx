import { createContext, useContext, useState } from "react";
import profilePic from "../assets/profile2.jpg"

const UserContext = createContext(undefined);

export const UserProvider = ({children}) =>{

    const [user] = useState({
        name:"seran",
        age:20,
        email: "vishwa.sovis@gmail.com",
        profilePic: profilePic
    });

    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);