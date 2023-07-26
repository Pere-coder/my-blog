import Email from "./Email";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return ( 
            <div className="flex flex-wrap justify-center items-center gap-[30px] md:gap-[200px] w-full  bg-gray-700 mt-20 p-5">
                <Email/>
                <div className="flex gap-2 md:mt-16 text-white">
                <FontAwesomeIcon icon={faEnvelope} width={30} />
                <FontAwesomeIcon icon={faEnvelope} width={30} />
                <FontAwesomeIcon icon={faEnvelope} width={30} />
                <FontAwesomeIcon icon={faEnvelope} width={30} />
                </div>
               
            </div> );
}
 
export default Footer;