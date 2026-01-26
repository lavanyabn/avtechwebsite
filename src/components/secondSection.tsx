export default function SecondSection() {
    return (
        <div className="w-full h-full md:py-12 py-6 md:px-0 px-4 flex flex-col justify-center items-center">
            <div className="md:w-2/3 w-full  md:h-[75vh] h-full  relative overflow-hidden flex bg-[url('/secondSection.png')] bg-cover bg-center bg-no-repeat  rounded-lg shadow-lg">
                <div className="w-full h-full p-10 flex flex-col gap-3 justify-end items-start bg-black/50 text-white">
                   <h2 className="text-left text-wrap md:w-1/2 w-full text-2xl">Advance Digital Innovation in Software Engineering, AI & Cloud</h2>
                    <p className="text-sm text-white/80">Avinya TechKnows is a technology-driven platform dedicated to digital innovation, skill development, and enterprise transformation. Supported by experienced engineers and industry experts, we provide solutions in software development, artificial intelligence, cloud computing, and educational technology. We help businesses adopt modern, scalable technologies while empowering individuals with future-ready skills. Through AI-powered solutions, cloud platforms, and impactful learning experiences, Avinya TechKnows bridges technology and realworld value, enabling organizations and professionals to grow, innovate, and succeed in the digital era</p>        
                </div>
            </div>
            <div className="w-full py-10 mt-6 flex md:flex-row flex-col md:gap-0 gap-10 justify-evenly px-4 items-center">
                <div className="px-6 flex flex-col justify-center items-center gap-3">
                    <h3 className="text-center text-xl text-[#cfb070] w-1/2 font-semibold">Engineering the Future Intelligence</h3>
                    <p className="text-sm text-center md:w-2/3 w-full">At Avinya Techknows, we harness AI, cloud, and full-stack innovation to shape smarter, scalable, and future-ready digital ecosystems. Our solutions evolve with your vision</p>
                </div>
                <div className="px-6 flex flex-col justify-center items-center gap-3">
                    <h3 className="text-center text-xl text-[#cfb070] w-1/2 font-semibold">Technology That Thinks Ahead</h3>
                    <p className="text-sm text-center md:w-2/3 w-full">We don’t just build technology we engineer foresight. Our intelligent solutions anticipate tomorrow’s challenges to empower businesses today.</p>
                </div>
                <div className="px-6 flex flex-col justify-center items-center gap-3">
                    <h3 className="text-center text-xl text-[#cfb070] w-2/3 font-semibold">Reimagining Possibilities with AI and Cloud</h3>
                    <p className="text-sm text-center md:w-2/3 w-full">From predictive analytics to scalable infrastructure, we help you unlock new opportunities through seamless AI integration and cloud-native architecture.</p>
                </div>
                
            </div>
        </div>
    );    
}