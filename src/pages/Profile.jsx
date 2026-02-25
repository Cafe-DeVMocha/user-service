import Header from "../components/Header";
import { useUser } from "../context/userContext"

export default function Profile() {

    const { user } = useUser();

    return (
        <div>
            <div className="grid grid-cols-[1fr_1fr] ">

                <div className="bg-blue-900 flex flex-col">
                    <div className="items-center justify-center mx-auto my-20 bg-blue-900">
                        <div>
                            <img src={user.profilePic} className="h-50 w-50 rounded-full object-cover" />
                        </div>

                    </div>
                </div>


                <div>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}