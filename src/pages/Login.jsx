import { useState } from "react"

export default function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = () => {

    }
    
   
    const handleChange = (e) => {
        setFormData((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }
        ))
    }


    return (
        <div>

            <div className="grid grid-cols-2 gap-4 min-h-screen w-full">
                <div className="flex flex-col p-4 items-center justify-center gap-15">
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-center text-5xl tracking-widest opacity-85 font-sans font-bold">Welcome Back!</p>
                        <p className="text-center tracking-tighter text-xl opacity-55">
                            Fuel your day with great coffee and seamless experiences at DeVMocha Cafe.
                            Sign in to continue your journey of productivity, comfort, and flavor.

                        </p>
                    </div>

                    <div className="flex flex-col">
                        <form className="flex flex-col gap-9" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label className="px-8 tracking-widest" htmlFor="username">Username</label>
                                    <input value={formData.username} onChange={handleChange} className="px-8 lg:w-xl border  py-2 outline-gray-700 rounded-4xl
                                hover:scale-102 duration-200 " placeholder="useranme" type="text" name="username" required />
                                </div>

                                <div className="flex flex-col">
                                    <label className="px-8 tracking-widest" htmlFor="username">Password</label>
                                    <input value={formData.password} onChange={handleChange} className="px-8 lg:w-xl border  py-2 outline-gray-700 rounded-4xl
                                hover:scale-102 duration-200 " placeholder="useranme" type="password" name="password" required />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="p-3 w-3xs border text-gray-100 rounded-2xl bg-blue-600 
                                hover:scale-103 duration-200 hover:font-semibold active:scale-95">
                                    Login
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                <div className=" flex">



                </div>
            </div>
        </div>
    )
}