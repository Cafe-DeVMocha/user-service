import AboutUsCover from "../assets/aboutus.jpg"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { easeIn, easeInOut, motion } from "framer-motion";


export default function AboutUs() {
    return (
        <div className="min-h-screen flex bg-pink-900 shadow-2xl items-center justify-center" id="about-us-section">
            <div className="grid grid-cols-1 lg:grid-cols-2  bg-gray-100 lg:w-full lg:m-3 rounded-xl shadow-2xl">

                <div className="flex flex-col">

                    <motion.div className="lg:scale-150 hidden lg:flex" >
                        <DotLottieReact
                            src="https://lottie.host/07cd7086-1119-417d-aed1-d9677c7e68b8/EEfZ45zxwQ.lottie"
                            loop
                            speed={0.70}
                            autoplay
                        />
                    </motion.div>
                    <motion.div>

                    <DotLottieReact className="scale-50 lg:scale-100"
                            src="https://lottie.host/e5fecd90-3786-45c7-a64e-f7583b66f9ee/jDPWDnhqtI.lottie"
                            loop
                            autoplay
                        />
                    </motion.div>
                </div>




                <div className=" flex flex-col lg:m-5 m-2 justify-center">
                    <motion.div className="lg:text-8xl text-4xl font-medium font-serif tracking-wider py-1 m-1 lg:py-3 lg:m-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}>
                        <h1 className="text-gray-900 text-center"> About Us </h1>
                    </motion.div>

                    <motion.div className="pt-5"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}>
                        <p className="text-md text-gray-700 text-center">
                            At <b>DevMocha Cafe</b>, we blend great coffee with creative energy. Built for thinkers, builders, and dreamers, our space is designed for people who love to code, create, collaborate, and relax with a perfect cup of coffee.

                            We believe coffee is more than a drink — it’s fuel for ideas.
                        </p>
                    </motion.div>

                    <motion.div className="lg:pb-10"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 30 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}>
                        <p className="text-md text-gray-700 text-center">

                            Our menu combines carefully crafted coffee, specialty drinks, and fresh bites, all prepared with quality ingredients and attention to detail. From smooth mochas to bold espresso and signature blends, every cup is brewed to inspire.

                            More than a café, <b>DevMocha</b> is a community hub — where technology meets taste, and conversations turn into creations.

                            Code. Create. Caffeinate.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 170 }}
                        whileInView={{ opacity: 1, y: 100 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}>
                        <p className="text-xl md:text-3xl pt-5 text-center font-serif font-semibold tracking-widest text-gray-100 lg:text-gray-800 ">

                            Code. Create. Caffeinate.
                        </p>
                    </motion.div>
                </div>




            </div>
        </div>
    );
}