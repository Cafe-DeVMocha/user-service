import { useState } from "react"


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

    return (

        <div>
            <div className=" min-w-screen grid grid-cols-2" >

                <div>
                    <p>hi</p>
                </div>
                <div className="flex flex-col justify-center items-center  text-black ">

                    <p className="text-4xl font-semibold font-serif tracking-widest">Signing Up</p>
                    <form className="flex p-10 flex-col gap-2 items-center justify-center ">
                        <div className="flex flex-col gap-2 p-2  font-sans">
                            <label htmlFor="name" className="md:text-md text-gray-800 tracking-wider">Name</label>
                            <input className="outline-2 outline-gray-200 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-800 "
                                id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="flex flex-col gap-2 p-2  font-sans">
                            <label htmlFor="email" className="md:text-md text-gray-800 tracking-wider">Email</label>
                            <input className="outline-2 outline-gray-200 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-800 "
                                id="email" name="email" type="text" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="flex flex-col gap-2 p-2  font-sans">
                            <label htmlFor="password" className="md:text-md text-gray-800 tracking-wider">password</label>
                            <input className="outline-2 outline-gray-200 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-800 "
                                id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
                        </div>

                        <div className="flex flex-col gap-2 p-2  font-sans">
                            <label htmlFor="confirmPassword" className="md:text-md text-gray-800 tracking-wider">Confirm Password</label>
                            <input className="outline-2 outline-gray-200 rounded-xl p-2 w-100 hover:outline-gray-300 text-gray-800 "
                                id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
                        </div>

                        <div className="">
                            <button className=" text-gray-200 p-3 bg-green-500 rounded-xl" type="submit">Submit</button>
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