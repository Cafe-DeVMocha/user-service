import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {

    return (

        <div id="contact-us-section">
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


                    <div className="flex my-auto mx-auto bg-gray-200 ">
                        <div className="flex items-center justify-center pt-100">

                            <form className=' h-screen'>
                                <div className="text-black flex flex-col gap-10 m-5 bg-amber-300 ">

                                    <div className="flex flex-row gap-25">
                                        <div className="flex flex-col">
                                            <label className='text-xl font-normal font-mono'>First Name</label>
                                            <input className='m-1  py-2 px-3 outline-2 outline-gray-500 hover:outline-gray-400 duration-200 rounded-md' type="text" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className='text-xl font-normal font-mono'>Last Name</label>
                                            <input className='m-1  py-2 px-3 outline-2 outline-gray-500 hover:outline-gray-400 duration-200 rounded-md' type="text" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className='text-xl font-normal font-mono'>Email</label>
                                            <input className='m-1  py-2 px-3 outline-2 outline-gray-500 hover:outline-gray-400 duration-200 rounded-md' type="text" />
                                        </div>

                                    </div>

                                    <div className="flex flex-row gap-25 ">
                                        <div className="flex flex-col">
                                            <label className='text-xl font-normal font-mono'>Message</label>
                                            <input className='m-1  py-2 px-3 outline-2 outline-gray-500 hover:outline-gray-400 duration-200 rounded-md' type="text" />
                                        </div>



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