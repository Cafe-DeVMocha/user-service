import backgroundImg from "../assets/background1.jpg"
import ReactTypingEffect from 'react-typing-effect';
import { Typewriter } from "react-simple-typewriter";

export default function LandPage() {

    return (
        <div id="home-section" className="bg-red-950 relative min-h-screen w-screen overflow-hidden">
            <img
                src={backgroundImg}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            <div className="relative z-10 flex flex-row justify-between items-center ">

                <div className="flex lg:pt-30 lg:pl-30">

                    <div className="flex flex-col lg:gap-20">
                        <div className=" flex flex-col text-white lg:gap-1">
                            <h1 className="lg:text-8xl font-bold shadow-2xl">Where Every Bite,</h1>
                            <h1 className="lg:text-8xl font-bold shadow-2xl">Matter</h1>

                            <div className=" relative lg:mr-30 lg:mt-5 italic tracking-widest lg:text-xl font-mono text-white h-[30px] overflow-hidden">
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

                            <div className="relative h-[140px] lg:pr-130 lg:pt-10 italic tracking-widest lg:text-md text-white">
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

                        <div className=" flex flex-row text-white  lg:pt-10 lg:pb-3">
                            <button className="bg-purple-800 lg:text-xl font-light lg:p-3 rounded-xl hover:scale-105 duration-10" >SignUp</button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}