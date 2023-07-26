import Email from "./Email";
import ReactDOM from 'react-dom'
import { FaBeer } from "react-icons/fa";
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return ( 
            <div className="flex flex-wrap justify-center items-center gap-[30px] md:gap-[200px] w-full  bg-gray-700 mt-20 p-5">
                <Email/>
                <div className="flex gap-2 md:mt-7 text-white">
                <AiFillFacebook size={30} className="cursor-pointer"/>
                <AiFillTwitterSquare size={30} className="cursor-pointer"/>
                <AiOutlineInstagram size={30} className="cursor-pointer"/>
                <AiOutlineWhatsApp size={30} className="cursor-pointer"/>

                </div>
               
            </div> );
}
 
export default Footer;