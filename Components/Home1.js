import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


export default function Home1(){
    return <section >
        <header className="flex  justify-between items-center bg-primary px-24  bg-[#1eb2a6]  ">
            <div className='first flex flex-row p-2px mt-3  space-x-4 '>
            <span><EnvelopeIcon className='icon'  ></EnvelopeIcon></span><p className='text-[17px] mb-3'>Support@kairaaacademy.com</p>
            <span><FaPhoneAlt className='icon' ></FaPhoneAlt></span><p className='text-[17px] mb-3' >+91-7092774077</p>
           
            </div>
            <div className='second flex flex-row m-4 space-x-10'>
               
            <a href="https://www.instagram.com/?hl=en"><FaInstagram className='icon'/></a>
            <div>
            <a href="https://twitter.com/"><FaTwitter className='icon'  /></a></div>
           <div> <a href="https://www.facebook.com/"><FaFacebookF className=' icon '/></a></div>
          <div> <a href="https://www.linkedin.com/"><IoLogoLinkedin className='icon'/></a> </div>
            </div></header>
    </section>

}
