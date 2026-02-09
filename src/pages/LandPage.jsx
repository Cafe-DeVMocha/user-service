import backgroundImg from "../assets/background4.jpg"
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";


export default function LandPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/signup");
    }

    return (
        
        <div
            id="home-section"
            className="
        relative
        min-h-screen
        w-full
        bg-cover
        bg-center
        bg-no-repeat active:scale-101 duration-1100
      "
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >

            <div className="relative z-10 flex flex-row justify-between items-center bg-red-900/10 ">

                <div className="flex lg:pt-30 lg:pl-20 sm:pt-60 pt-40 pl-2">

                    <div className="flex flex-col lg:gap-10 sm:gap-0 gap-5 pt-35">
                        <div className=" flex flex-col text-white lg:gap-1 gap-1">
                            <h1 className="lg:text-9xl sm:text-8xl text-4xl font-bold shadow-2xl">Where Every Bite,</h1>
                            <h1 className="lg:text-9xl sm:text-8xl text-4xl font-bold shadow-2xl">Matter</h1>

                            <div className=" relative lg:mr-30 lg:mt-5 italic tracking-widest lg:text-xl sm:text-xl text-sm font-mono text-white h-[70px] overflow-hidden">
                                <Typewriter
                                    words={[
                                        "Experience a dining journey that celebrates flavor, sparks curiosity, and leaves every visit unforgettable."
                                    ]}
                                    loop={true}       // set to true if you want repeating
                                    typeSpeed={50}
                                    deleteSpeed={100}
                                    delaySpeed={4000}
                                >
                                    {({ text }) => (
                                        <p className=" lg:pt-5 lg:pr-100 ">{text}</p>
                                    )}
                                </Typewriter>
                            </div>

                            <div className="relative h-[140px] lg:pr-130 lg:pt-10 pt-10 italic tracking-widest lg:text-[14px] sm:text-md text-xs text-justify pr-5 text-white">
                                <Typewriter
                                    words={[
                                        "Step into a world where culinary artistry meets innovation. At DeVMocha, every dish is thoughtfully crafted from the finest ingredients, blending vibrant flavors, fresh textures, and contemporary presentation. From colorful gourmet salads to fusion mains, decadent desserts, and handcrafted drinks, each creation is designed to delight your senses. Whether you’re savoring a perfectly balanced brunch, enjoying a coffee crafted by expert baristas, or indulging in an exquisite dinner, every bite tells a story of passion, precision, and creativity. "
                                    ]}
                                    loop={true}       // set to true if you want repeating
                                    typeSpeed={30}
                                    deleteSpeed={50}
                                    delaySpeed={4000}
                                >
                                    {({ text }) => (
                                        <p className="lg:pt-5 lg:pr-100 lg:text-xl font-mono text-white">{text}</p>
                                    )}
                                </Typewriter>
                            </div>



                        </div>

                        <div className=" flex flex-row relative text-white md:justify-between lg:pt-10 lg:pb-10 pt-20 sm:pb-10">
                            <button className="bg-purple-900 lg:text-xl font-normal md:p-4 p-3 md:w-md w-[150px] rounded-xl hover:scale-105 duration-200 hover:border-b-violet-300 hover:font-bold 
                            active:scale-100 active:bg-purple-800 hover:shadow-inner" onClick={handleClick}>SignUp</button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}