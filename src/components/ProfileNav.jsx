
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function ProfileNav() {

    return (
        <div className="flex gap-5 justify-center h-screen bg-gray-300">

            <div className="flex flex-col gap-8 justify-center items-center w-15 opacity-90 shadow-2xl">
                <div className="text-black w-full text-center p-2 hover:text-gray-100 hover:bg-blue-950 hover:duration-150 hover:scale-110 
                 active:bg-black active:text-gray-50 rounded-full shadow-2xl" >
                    <AccountCircleIcon fontSize='medium' />
                </div>
                <div className="text-black w-full text-center p-2 hover:text-gray-100 hover:bg-blue-950 hover:duration-150 hover:scale-110 
                 active:bg-black active:text-gray-50 rounded-full shadow-2xl">
                    <FavoriteIcon fontSize='medium' />
                </div>
                <div className="text-black w-full text-center p-2 hover:text-gray-100 hover:bg-blue-950 hover:duration-150 hover:scale-110 
                 active:bg-black active:text-gray-50 rounded-full shadow-2xl">
                    <MessageIcon fontSize='medium' />
                </div>
                <div className="text-black w-full text-center p-2 hover:text-gray-100 hover:bg-blue-950 hover:duration-150 hover:scale-110 
                 active:bg-black active:text-gray-50 rounded-full shadow-2xl">
                    <EmojiEventsIcon fontSize='medium' />
                </div>
                <div className="text-black w-full text-center p-2 hover:text-gray-100 hover:bg-blue-950 hover:duration-150 hover:scale-110 
                 active:bg-black active:text-gray-50 rounded-full shadow-2xl">
                    <SettingsIcon fontSize='medium' />
                </div>

                <div className='mt-50 text-black w-full text-center p-2 hover:text-gray-100 hover:bg-blue-950 hover:duration-150 hover:scale-110 
                 active:bg-black active:text-gray-50 rounded-full shadow-2xl'>
                    <DarkModeIcon fontSize='medium'/>
                </div>


            </div>


        </div>
    )
}