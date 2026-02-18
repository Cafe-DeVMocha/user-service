import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {

    return (

        <div id="contact-us-section">
            <div className="bg-linear-to-br from-gray-950 via-gray-900 to-gray-950">

                <div className="grid grid-cols-[1fr_1fr]">
                    <div className="flex flex-col text-white gap-30 pt-40">
                        <div className="flex flex-col gap-5 mx-10 lg:max-w-xl">
                            <p className="lg:text-7xl text-xl">Contact Us</p>
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

                        <div className="flex flex-row mx-10 gap-3">
                            <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                <p>Customer Support</p>
                                <p>Quick responses and reliable assistance whenever you reach out.</p>
                            </div>

                            <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                <p>Technical Support</p>
                                <p>Specialized help for bugs, errors, and system issues.</p>
                            </div>

                            <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                <p>General Inquiries</p>
                                <p>Questions, collaborations, or feedback — we’re happy to hear from you.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex">
                        <div className="flex">
                            <form className="text-white flex flex-col">

                                <div className="flex flex-row">
                                    <label>Name</label>
                                    <input type="text" />
                                </div>



                            </form>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}