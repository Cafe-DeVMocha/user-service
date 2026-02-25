import Header from "../components/Header";
import ProfileNav from "../components/ProfileNav";
import { useUser } from "../context/userContext"
import SearchIcon from '@mui/icons-material/Search';

export default function Profile() {

    const { user } = useUser();
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const placeHolder = <SearchIcon fontSize='medium'/>

    return (
        <div className="flex">

            <div className="flex">
                <ProfileNav />
            </div>
            <div className="flex flex-col py-10 flex-1">

                <div className="flex justify-between items-center w-full px-4">
                    <div className="flex flex-col px-5">
                        <p className="text-2xl font-medium font-mono">Welcome, {user.name}</p>
                        <p className="text-black"> {now.getDate()} {month} {now.getFullYear()} </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2"/>
                            <input type="text" id="search" placeholder= "Search" className="outline-1 px-10 bg-gray-50 opacity-70 h-8 w-70 rounded-md hover:outline-gray-200 active: outline-gray-300"/>
                        </div>
                        
                        <div>
                            <img src={user.profilePic} className="w-15 h-15 object-cover rounded-full"/>
                        </div>
                    </div>
                </div>

                <div>

                </div>


              


                
            </div>
        </div>
    )
}