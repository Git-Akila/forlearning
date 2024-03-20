import React from 'react'
import {Link} from 'react-router-dom'
import "./Footer.css"
    import { FaGooglePlay } from "react-icons/fa";
    import Education9 from '../Assets/education9.jpg'
    import { FaInstagram } from "react-icons/fa";
    import { FaTwitter } from "react-icons/fa";
    import { FaFacebookF } from "react-icons/fa";
    import { IoLogoLinkedin } from "react-icons/io5";
    import { FaPhoneAlt } from "react-icons/fa";
    import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
    import { EnvelopeIcon } from '@heroicons/react/24/solid';
    import { FaArrowUp } from "react-icons/fa";
 const Footer = () => {
  return (
    <section8 className="">
    
            <div className="flex flex-col md:flex-row py-20 md:px-24 md:mb-[-200px]  justify-center ">
                
        <div className="md:mw-1/2 ">
            
                
                <img className="md:w-[500px] md:h-[400px]"src={Education9}/>
            <a href="https://youtu.be/9Y7ma241N8k?si=H50tPspFbB1jtrY3"><FaGooglePlay className="icons" /></a> </div> 
            
            
        
        <div className="md:w-1/2 bg-slate-100 md:h-[400px] p-4">
        <div className="flex=col justify-center mr-20">
                     <h1 className="text-2xl  text-blue-600 font-semibold mt-5">Newsletters</h1>
                    <h2 className="font-medium text-5xl ">Get Our Every Single Notifications</h2>
                    <div className="md:flex mt-12 ml-8 space-x-6 ">
                    <button className="w-[200px] h-[60px] rounded-xl bg-slate-400 hover:text-white"><Link to="/">Regular Updates</Link></button>
                    <button className="w-[200px] h-[60px] rounded-xl bg-slate-200 hover:text-white">Weekly Updates</button></div>
                    <div className="mt-10 bg-slate-200 text-center pb-2 pt-2">
                        <div className="md:flex gap-1"><EnvelopeIcon className="icon w-8 h-8"/>
                        <input className="md:w-[350px] md:h-[40px] bg-slate-100 rounded-xl text-center" placeholder="Enter Email"></input> 
                        <button className="button ">Subscribe</button></div>
                    </div>
    </div></div></div>
        
            
            
            
           {/*---------------------------*/} 
            <div className="md:flex md:justify-between md:items-center sm:px-12 bg-teal-500 opacity-1 ">
            
                <div className="grid grid-cols-1 sm:grid-col-3 lg:grid-cols-6 gap-6 sm:px-8 px-4 py-16 ml-32 mt-32 ">
                <div className="">
                        <h1 className="head1">About Us</h1>
                        <p className="text-[18px]">Kairaa Blockchain Academy is a top-notch online 
                            learning center that offers a wide range of courses.</p>
                            <button className="button"><Link to="/">LEARN MORE</Link></button>
                    </div>
                    
                    <div className="">
                        <ul className="">
                            <h1 className="head1">Quick Links</h1>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>About Us</li></a>
                            <a href="#"><li>Courses</li></a>
                            <a href="#"><li>Contact</li></a>
                        </ul>
                    </div>
                    <div>
                        <ul className="">
                            <h1 className="head1">Resources</h1>
                            <a href="#"><li>Latest Blogs</li></a>
                            <a href="#"><li>FAQ's</li></a>
                            <a href="#"><li>Privacy Policy</li></a>
                           <a href="#"> <li>Our Terms</li></a>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="">
                            <h1 className="head1">Get In Touch</h1>
                            <li>support@kairaa.in</li>
                            <li>131, 2nd floor, DB Road, RS Puram, Coimbatore - 641002.</li>
                            
                        </ul>
                    </div>
                    <div className="">
                        <p className="text-[18px]">Join our Blockchain Academy today and embark on a 
                            journey of endless possibilities. Don't miss out on the
                             chance to enhance your blockchain knowledge.</p>
                             <button className="button">SIGNUP</button>
                    </div>
                    </div>
                
            </div>
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-teal-500 border-t-2 border-t-black ">
                <span>&copy; 2024.<a className="hover:text-blue-600"href="http://kairaablockchainacademy.com/">KAIRAAACADEMY.COM</a> </span>
                <div>
                 <button><Link to="/"><MdOutlineKeyboardDoubleArrowUp className="scroll-top"/></Link></button>
                </div>
                <svg class="animate-bounce w-5 h-5 bg-cyan-...">
                     <FaArrowUp className='icon w-10 h-10'  />
                </svg>
                <div className='second flex flex-row m-4 space-x-10'>
                   
                <FaInstagram className='icon'/>
                <div>
                <FaTwitter className='icon'  /></div>
               <div> <FaFacebookF className=' icon '/></div>
              <div> <IoLogoLinkedin className='icon'/> </div>
                </div>
            </div>
      
            </section8>
    
  )
}
export default Footer;
