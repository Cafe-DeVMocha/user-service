import Header from "../components/Header";
import ProfileNav from "../components/ProfileNav";
import { useUser } from "../context/userContext"

export default function Profile() {

    const { user } = useUser();
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });

    return (
        <div className="flex">

            <div className="flex">
                <ProfileNav />
            </div>
            <div className="flex flex-col py-10">

                <div className="flex justify-between items-center">
                    <div className="flex flex-col px-5">
                        <p className="text-2xl font-medium font-mono">Welcome, {user.name}</p>
                        <p className="text-black"> {now.getDate()} {month} {now.getFullYear()} </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <input type="text" id="search" className="border bg-gray-50 opacity-70 h-8 w-50"/>
                        <div>
                            <img src={user.profilePic} className="w-10 h-10 object-cover rounded-full"/>
                        </div>
                    </div>
                </div>

                <div>

                </div>


              


                
            </div>
        </div>
    )
}