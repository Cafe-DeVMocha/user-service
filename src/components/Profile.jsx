import { useUser } from "../context/userContext";


function Profile () {

    const { user } = useUser();

    return (
        <div className="flex flex-row md:hidden mt-0.5 p-1 bg-gray-800 items-center justify-between ">
            <p className="text-center font-extralight text-xs pl-15 text-gray-400">“Hungry? Let’s fix that. Made with love, served with care.</p>
            <img src={user.profilePic} className={`w-auto h-4 rounded-4xl sm:h-20  `} alt="profile img" />
        </div>
    );
}

export default Profile;