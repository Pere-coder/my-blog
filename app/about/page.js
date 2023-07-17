import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const about = () => {
    return ( <>

                <Navbar/>
                <div className="mr-20 ml-20">
                <div className="flex flex-col justify-center items-center text-center mt-20 border border-gray-300 rounded-md p-5 text-black leading-[30px]">
                    <h1 className="text-[40px] ">About Us</h1>
                <p className="mt-5">Venworld Global is a renowned software engineering and media solutions company thriving to take your business setups to the next development phase!

                    We assure you that our well-planned services will bring your brand to the limelight. Our team of professionals combine experienced advanced tools to develop the best web development projects, programming projects, mobile application, data management projects, high-level desktop applications, user interface, branding, media services and other digital solutions that never existed in the digital, software and media industry with a knack for excellence in the software and media solutions in Africa continent. 

                    Since the year 2018 with not more than two members, as a digital agency, now we have come a long way and moved on to software development as well as media services solutions with more than thirty members staff across West African countries and a few Asian countries including India, Pakistan and the United Arab Emirates. 

                    More than eight years of experience have specialized us from the rest with advanced technological tools, high-level language expertise, knowledgeable experienced programmers, universally skilled professionals and vast media expertise has also enhanced our growth and made us unique. 

                    Software Engineering, Web and responsive mobile app development, Dynamic Database Management Systems, E-Commerce Website Projects, Desktop App Development, Domain Name Privacy, Media Production, User Experience Designs, Search Engine Optimization, Content Management System, Digital Marketing, Live Video Productions, Graphics Designs, and Building of Non-Fugitive Token (NFT) among others have helped shaped the excellent course of our services!
                    </p>
                </div>
                </div>
                <Footer/>
            </> );
}
 
export default about;