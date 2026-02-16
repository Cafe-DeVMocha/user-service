import { Alert } from "@mui/material";
import { useState } from "react"
import coverImg from "../assets/aboutus3.jpg"


export default function SignUp() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""

    })

    function handleChange(e) {


        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

        if (formData.password != formData.confirmPassword) {
            alert("Password does not match!");
            return;
        }

        alert('form submitted');
    }

    const classNameImg = "blur-sm";

    return (

        <div>

            <div className="relative  grid grid-cols-2 min-h-screen bg-linear-to-br from-gray-900 via-gray-900 to-gray-950">

                <div
                    className="absolute inset-0 bg-center bg-cover blur-sm"
                    style={{ backgroundImage: `url(${coverImg})` }}
                >
                </div>

                <div className="relative text-white flex flex-col items-center px-4 md:px-8 py-4 md:py-60 ">
                    <div className="flex flex-col gap-4 ">
                        <p className="text-7xl">Create Your <br /> Free Account </p>

                        <p className="text-2xl text-gray-200">Grab your offers on time, Share with your firends</p>

                    </div>
                </div>

                <div className=" relative flex flex-col justify-center bg-linear-to-br from-gray-100 via-gray-100 to-gray-100 ">
                    <div className=" flex flex-col justify-center text-black  items-center  opacity-90 shadow-2xl rounded-2xl py-4">

                        <p className="text-4xl font-semibold font-sans tracking-wide">Create an account</p>

                        <p className="text-md font-normal font-sans tracking-wide">Already have an account? <span className="underline-offset-1 underline text-blue-400">Log In</span></p>

                        <form className="flex p-10 flex-col gap-2 items-center justify-center" onSubmit={handleSubmit}>

                            <div className="flex flex-col gap-2 p-2  font-sans">
                                <label htmlFor="name" className="md:text-md text-gray-900 tracking-wider animate-floatBlob ">Name</label>
                                <input className="outline-2 outline-gray-500 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-800 hover:scale-102 duration-600"
                                    id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-2 p-2  font-sans">
                                <label htmlFor="email" className="md:text-md text-gray-900 tracking-wider">Email</label>
                                <input className="outline-2 outline-gray-500 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-800 hover:scale-102 duration-600"
                                    id="email" required name="email" type="email" value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-2 p-2  font-sans">
                                <label htmlFor="password" className="md:text-md text-gray-900 tracking-wider">Password</label>
                                <input className="outline-2 outline-gray-500 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-800 hover:scale-102 duration-600"
                                    id="password" required name="password" type="password" value={formData.password} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-2 p-2  font-sans">
                                <label htmlFor="confirmPassword" className="md:text-md text-gray-900 tracking-wider">Confirm Password</label>
                                <input className="outline-2 outline-gray-500 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-800 hover:scale-102 duration-600"
                                    id="confirmPassword" required name="confirmPassword" minLength={8} type="password" value={formData.confirmPassword} onChange={handleChange} />
                            </div>

                            <div className="pt-8">
                                <button className=" text-gray-100 p-3 w-3xs bg-green-600 rounded-xl hover:bg-green-500 duration-200 active:scale-95" type="submit">Submit</button>
                            </div>
                        </form>

                        <p className="text-md opacity-70">
                            or signing with
                        </p>

                        <div className="flex flex-row gap-2 py-4 md:py-8">
                            <button className="px-4 py-2 bg-red-700 rounded-xl 
                            text-gray-100 hover:scale-105 hover:font-medium active:scale-95 duration-200">Google</button>

                            <button className="px-4 py-2 bg-blue-700 rounded-xl 
                            text-gray-100 hover:scale-105 hover:font-medium active:scale-95 duration-200">Facebook</button>
                        </div>


                    </div>
                </div>





            </div>
        </div>

    )

}