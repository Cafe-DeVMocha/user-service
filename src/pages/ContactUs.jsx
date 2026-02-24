import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { form } from 'framer-motion/client';
import { useState } from 'react';

export default function ContactUs() {

    const [formData, setFormData] = useState({
        firstName: "",
        firstName: "",
        email: "",
        message: ""
    });

    function handleChange(e) {


        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted!");
    }

    return (

        <div id="contact-us-section" >
            <div className="bg-linear-to-br from-gray-950 via-gray-900 to-gray-950">

                <div className="lg:grid lg:grid-cols-[1fr_1fr] flex flex-col">
                    <div className="flex flex-col text-white gap-30 pt-40">
                        <div className="flex flex-col gap-5 mx-10 lg:max-w-xl">
                            <p className="lg:text-7xl text-3xl">Contact Us</p>
                            <p className="text-xs lg:text-xl font-light">We’d love to hear from you! Whether you have questions, feedback, or need support,
                                our team is here to help. Reach out to us using the form below, email, or phone, and
                                we’ll get back to you as soon as possible. Your message matters! </p>
                            <p className="font-sans tracking-widest font-semibold text-5xl text-center pt-5">Anytime</p>

                            <div className="flex gap-3 justify-center">
                                <CallIcon fontSize='small' />
                                <p>0112051269</p>
                                <p>|</p>
                                <LocationOnIcon fontSize='small' />
                                <p> Location </p>
                            </div>

                        </div>

                        <div className="flex flex-row mx-10 gap-3 p-3">
                            <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                <p>Customer Support</p>
                                <p className='text-md font-light opacity-75'>Quick responses and reliable assistance whenever you reach out.</p>
                            </div>

                            <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                <p>Technical Support</p>
                                <p className='text-md font-light opacity-75'>Specialized help for bugs, errors, and system issues.</p>
                            </div>

                            <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                <p>General Inquiries</p>
                                <p className='text-md font-light opacity-75'> Questions, collaborations, or feedback — we’re happy to hear from you.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col  mx-auto bg-gray-100">
                        <div className='flex my-auto justify-center'>
                            <p className='font-medium text-3xl font-serif text-center tracking-wider'>Feel free to talk with us</p>
                        </div>
                        
                        <div className="flex items-center justify-center ">

                            <form className='h-auto bg-gray-100 ' onSubmit={handleSubmit}>
                                <div className="text-black flex flex-col gap-10 m-5 ">

                                    <div className="flex flex-row gap-25">
                                        <div className="flex flex-col">
                                            <label className='text-md font-normal font-sans opacity-80' htmlFor='firstName'>First Name</label>
                                            <input className='m-1  py-2 px-3 outline-1 outline-gray-500 hover:outline-gray-400 duration-150 rounded-md active:scale-105' 
                                             type="text" id='firstName' name='firstName' required value={formData.firstName} onChange={handleChange} />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className='text-md font-normal font-sans opacity-80' htmlFor='lastName'>Last Name</label>
                                            <input className='m-1  py-2 px-3 outline-1 outline-gray-500 hover:outline-gray-400 duration-150 rounded-md active:scale-105' type="text" 
                                           name='lastName' id='lastName' required value={formData.lastName} onChange={handleChange}/>
                                        </div>

                                        <div className="flex flex-col">
                                            <label className='text-md font-normal font-sans opacity-80' htmlFor='email'>Email</label>
                                            <input className='m-1  py-2 px-3 outline-1 outline-gray-500 hover:outline-gray-400 duration-150 rounded-md active:scale-105' type="email"
                                           name='email' id='email' required value={formData.email} onChange={handleChange} />
                                        </div>

                                    </div>

                                    <div className="flex flex-row gap-25 ">
                                        <div className="flex flex-col w-full ">
                                            <label className='text-md font-normal font-sans opacity-80' htmlFor='message'>Message</label>
                                            <textarea className='m-1  py-2 px-3 outline-1 outline-gray-500 hover:outline-gray-400 duration-150 rounded-md active:scale-105
                                            w-full min-h-50' id='message' required type="text" name='message'  value={formData.message} onChange={handleChange}/>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <button className='bg-green-500 py-1 px-3 text-xl font-medium text-white 
                                        hover:bg-green-600 hover:scale-105 duration-150 active:scale-95 hover:font-normal'>
                                            Submit
                                        </button>
                                    </div>



                                </div>
                            </form>

                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}