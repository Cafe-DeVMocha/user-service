import Header from "../components/Header";
import ProfileNav from "../components/ProfileNav";
import { useUser } from "../context/userContext"

export default function Profile() {

    const { user } = useUser();

    return (
        <div>
            <div className="grid grid-cols-[0.1fr_0.8fr_1fr] ">
                <div>
                    <ProfileNav />
                </div>

                <div className="bg-blue-950 flex flex-col shadow-2xl min-h-screen">
                    <div className="items-center justify-center mx-auto my-20 ">
                        <div>
                            <img src={user.profilePic} className="h-50 w-50 rounded-full object-cover shadow-2xl" />
                        </div>

                        <p className="text-center py-5 text-gray-100 text-2xl font-serif font-light">{user.name}</p>

                    </div>
                </div>


                <div>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}