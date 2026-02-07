import backgroundImg from "../assets/background1.jpg"
import ReactTypingEffect from 'react-typing-effect';
import { Typewriter } from "react-simple-typewriter";

export default function LandPage() {

    return (
        <div className="bg-red-950 relative min-h-screen w-screen overflow-hidden">
            <img
                src={backgroundImg}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 flex flex-row justify-between items-center ">

                <div className="flex lg:pt-30 lg:pl-30">

                    <div className="flex flex-col lg:gap-20">
                        <div className=" flex flex-col text-white lg:gap-1">
                            <h1 className="lg:text-8xl font-bold shadow-2xl">Where Every Bite,</h1>
                            <h1 className="lg:text-8xl font-bold shadow-2xl">Matter</h1>

                            <div className=" lg:mr-30 lg:mt-2 lg:mb-1 italic tracking-widest lg:text-md font-mono text-white">
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

                            <div className=" lg:mr-130  lg:mt-2 lg:mb-1 italic tracking-widest lg:text-md text-whit">
                                <Typewriter
                                    words={[
                                        "Step into a world where culinary artistry meets innovation. At DeVMocha, every dish is thoughtfully crafted from the finest ingredients, blending vibrant flavors, fresh textures, and contemporary presentation. From colorful gourmet salads to fusion mains, decadent desserts, and handcrafted drinks, each creation is designed to delight your senses. Whether you’re savoring a perfectly balanced brunch, enjoying a coffee crafted by expert baristas, or indulging in an exquisite dinner, every bite tells a story of passion, precision, and creativity. "
                                    ]}
                                    loop={true}       // set to true if you want repeating
                                    typeSpeed={50}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                >
                                    {({ text }) => (
                                        <p className="lg:pt-5 lg:pr-100 lg:text-xl font-mono text-white">{text}</p>
                                    )}
                                </Typewriter>
                            </div>

                             

                        </div>

                        <div className="flex flex-row lg:m-3 text-white lg:pb-3">
                            <p>dfdf</p>
                            <p>dfdf</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}