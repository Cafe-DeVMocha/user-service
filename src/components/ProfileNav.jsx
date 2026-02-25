
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
export default function ProfileNav() {
    return (
        <div className="flex gap-5 items-center justify-center">

            <div className="flex flex-col gap-8 justify-end">
                <div className="text-black">
                    <AccountCircleIcon fontSize='large' />
                </div>
                <div className="text-black">
                    <FavoriteIcon fontSize='large' />
                </div>
                <div className="text-black">
                    <MessageIcon fontSize='large' />
                </div>
                <div className="text-black">
                    <EmojiEventsIcon fontSize='large' />
                </div>
                <div className="text-black">
                    <SettingsIcon fontSize='large' />
                </div>


            </div>


        </div>
    )
}