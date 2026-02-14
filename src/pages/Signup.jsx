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

    return (

        <div>

            <div className="grid grid-cols-2 min-h-screen bg-linear-to-br from-gray-900 via-gray-900 to-gray-950" >


                <div className="text-white">
                    <img src ={coverImg}  className="overflow-hidden min-w-screen h-screen blur-md" />
                </div>

                <div className="flex flex-col justify-center text-white  items-center  bg-linear-to-br from-gray-800 via-gray-900 to-gray-950 opacity-90 shadow-2xl rounded-2xl m-5 ">

                    <p className="text-4xl font-semibold font-sans tracking-wide">Create an account</p>

                    <p className="text-md font-normal font-sans tracking-wide">Already have an account? <span className="underline-offset-1 underline text-blue-700">Log In</span></p>

                    <form className="flex p-10 flex-col gap-2 items-center justify-center" onSubmit={handleSubmit}>

                        <div className="flex flex-col gap-2 p-2  font-sans">
                            <label htmlFor="name" className="md:text-md text-gray-100 tracking-wider animate-floatBlob ">Name</label>
                            <input className="outline-2 outline-gray-500 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-100 hover:scale-102 duration-600"
                                id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="flex flex-col gap-2 p-2  font-sans">
                            <label htmlFor="email" className="md:text-md text-gray-100 tracking-wider">Email</label>
                            <input className="outline-2 outline-gray-500 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-100 hover:scale-102 duration-600"
                                id="email" required name="email" type="email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="flex flex-col gap-2 p-2  font-sans">
                            <label htmlFor="password" className="md:text-md text-gray-100 tracking-wider">Password</label>
                            <input className="outline-2 outline-gray-500 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-100 hover:scale-102 duration-600"
                                id="password" required name="password" type="password" value={formData.password} onChange={handleChange} />
                        </div>

                        <div className="flex flex-col gap-2 p-2  font-sans">
                            <label htmlFor="confirmPassword" className="md:text-md text-gray-100 tracking-wider">Confirm Password</label>
                            <input className="outline-2 outline-gray-500 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-100 hover:scale-102 duration-600"
                                id="confirmPassword" required name="confirmPassword" minLength={8} type="password" value={formData.confirmPassword} onChange={handleChange} />
                        </div>

                        <div className="pt-8">
                            <button className=" text-gray-100 p-3 w-3xs bg-green-600 rounded-xl hover:bg-green-500 duration-200 active:scale-95" type="submit">Submit</button>
                        </div>
                    </form>

                    <p>
                        or signing with
                    </p>

                    <div className="flex flex-row gap-2">
                        google facebook instrgram
                    </div>


                </div>



            </div>
        </div>

    )

}