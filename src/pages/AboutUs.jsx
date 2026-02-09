import AboutUsCover from "../assets/aboutus.jpg"

export default function AboutUs(){
    return(
        <div className="bg-black" id="about-us-section">
            <div style={{backgroundImage: `url(${AboutUsCover})`}} 
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat duration-1100
            border-b-black border-4 active:scale-101">

                <div className="bg-black h-screen opacity-98">
                        
                </div>

            </div>
        </div>
    );
}