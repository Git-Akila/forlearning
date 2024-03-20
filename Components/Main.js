import React from 'react';
import '../components/Home2.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltRight,FaRegCheckCircle ,FaCheckCircle,FaCheck} from "react-icons/fa";

import sample from '../assets/mine.mp4';
import img from '../assets/hero.png';
import ImgRead from '../assets/reading.png';
import ImgSocial from "../assets/social-media.png";
import ImgMoney from '../assets/money-bag.png';
import Vedio from '../assets/video.png';
import About1 from '../assets/about_2.png';
import About2 from '../assets/about_3.png';

import Verified from '../assets/verified.png';
import openbook from '../assets/open-book.png';
import player from '../assets/video-player.png';


import Def from '../assets/defi_1.png';
import blockchain from '../assets/blockchain_1.png';
import Hyber from '../assets/hyperledger_1.png';
import Flower from '../assets/1.da37bbb6.png';
import Flower1 from '../assets/2.bf09f0b4.png';

import Education8 from "../assets/education8.jpg";
import Education2 from "../assets/educ.jpg";
import blob1 from '../assets/blog2.jpg';
import blob2 from '../assets/blog3.jpg';
import forvedio1 from '../assets/mine5.mp4'

   








{/*------------------------------------------------------------------*/}






export const Home = () => {
  return ( 
    
      <section >
      
        {/*----------------------------Hero-----------------------------------------------------*/}
        <div className=' w-full h-screen relative grid-col-2 gap-9'>
            
        <video className='videoTag w-full h-full object-cover' autoPlay loop muted>
        <source src={sample} type='video/mp4'/>
        </video>
        <div className='absolute w-full h-full top-0  left-0 bg-gray-900/65'></div>


        {/*-----------------------------------------------*/}
        <div className='flex justify-between w-full'>
        <div className="absolute top-0 w-1/2 p-11 col-lg-6 align-self-center mt-9">
                <img src={img}/>
            </div>
            
            <div className=" absolute left-2/4 top-0 p-24 col-lg-6 align-self-center mt-20 ">
            <div className='flex' ><span className='text-white mt-2 px-5'><FaCheck size={25}></FaCheck></span><h3 className="font-semibold text-2xl text-white">Master
                    blockchain skills for success</h3></div> 
                    <h1 className="w-full text-4xl font-semibold text-white  pt-5 pb-5">Discover Blockchain Technology with
               <span>Kairaa Academy&#x27;s</span> Online Courses.</h1>
              <p className="text-[20px] font-bold text-white">Kairaa Academy is the leading provider of online blockchain courses. 
					We offer a wide range of courses to meet the needs of students of all levels of experience, from beginners to advanced learners.</p>
         <ul class="list-style-none fadeInUp text-white font-semibold text-[18px] delay-0-6s py-3">
                    <li className='flex py-2'><span className='px-2'><FaCheckCircle /></span>Comprehensive blockchain courses</li>
                      <li className='flex'><span className='px-2'><FaCheckCircle /></span>Online video tutorials and best practices </li>
                        </ul>
                <div className=" flex font-semibold mt-8 space-x-5 ">
               <Link to="/Courses"> <button className="button flex" >Buy Courses<span className='py-1 px-2'><FaArrowRightLong/></span>
                  </button></Link>
                  <Link to="/career"> <button className="button flex" >Start Career <span className='py-1 px-2'><FaArrowRightLong/></span>
                 </button></Link> </div>
                 </div>
        </div> 
        </div>

      

  
  
  {/*------------------------------------------Container1---------------------------------------------------------*/}
  <div className='w-full h-full'>
  <div className="conataine gap-6 flex align-items-center py-12 px-24">
        <div class="section-title w-1/2 mt-50 p-20">
        <h3 class="animate-bounce m-auto bg-cyan-600 py-5 text-black font-semibold text-center rounded p-4">
                        WHY LEARN HERE?</h3>
           
         <h2 className="text-black text-5xl text-600 p-4">We offer innovative <span>online</span> classroom</h2>
                 </div>
         <div className="section-para w-1/2 p-20">
            <p className="text-[16px] font-medium p-5 leading-7">Kairaa Blockchain Academy&#x27;s outstanding feature is its wide range of educational materials,
            designed to assist students in understanding and retaining the subject by offering a diverse collection
            of learning resources.</p>
            </div>
    </div></div>
       
        {/*-----------------------------------------------------------------------------------------------------*/}
       <section3 className='w-full h-full'>
       <div className="flex grid-cols-4 sm:grid-col-4 lg:grid-cols-6 gap-6 sm:px-8 px-4 py-3 ml-32 ">
       
        <div className=' div border p-5 h-[290px] w-[270px] rounded' >
            <img  className="w-[60px] h-[60px]"src={ImgRead}/>
            <h5 className='text-black py-5 text-[21px]'>Exclusive Courses</h5>
            <p className='font-medium text-[17px]'>Kairaa blockchain academy: Learn blockchain online at your own pace, with courses for all levels.</p>
        </div>

        <div className='div border p-5 h-[290px] w-[270px] rounded' >
            <img  className="w-[60px] h-[60px]"src={ImgSocial}/>
            <h5 className='text-black py-5 text-[21px]'>Video Tutorials</h5>
            <p className='font-medium text-[17px]'> Learn blockchain at your own pace and on your own schedule 
            with our online video tutorials.</p>
        </div>

        <div className='div border p-5 h-[290px] w-[270px] rounded' >
            <img  className="w-[60px] h-[60px]"src={ImgMoney}/>
            <h5 className='text-black py-5 text-[21px]'>Flexibility</h5>
            <p className='font-medium text-[17px]'>Learn blockchain from anywhere in the world, at any time of day or night,
             with flexible online video tutorials.</p>
        </div>

        <div className='div border p-5 h-[290px] w-[270px] rounded' >
            <img  className="w-[60px] h-[60px]"src={Vedio}/>
            <h5 className='text-black py-5 text-[21px]'>Cost Efficiency</h5>
            <p className='font-medium text-[17px]'>Save money on blockchain education with Kairaa blockchain 
            academys cost-effective online courses.</p>
        </div>

        </div>
       </section3>
    
    {/*-------------------------------------------------container2-----------------------------------------------------------*/}
    <div className=" w-full h-screen flex flex-row px-24">
        <div className="con2 w-1/2 ">
            <div className="img1 con2">
            <img className="mt-32 ml-20"src={About2}/>
            
          
                <img className="in mt-[-70px] ml-5"src={About1}/>
            </div>

        </div>
        <div className="cont2 w-1/2 mt-32 ml-20">
            <h2 className="text-[20px] font-blod text-blue-600">About Kairaa Academy</h2>
            <h2 className="h2 text-5xl mb-6 mt-4">We Are Excellent Choice To Learning Blockchain</h2>
            <p className="para">Kairaa Blockchain Academy is a leading online learning center that offers a wide range of blockchain and web 3.0 skills to students around the world. With its focus on flexibility and support, Kairaa Blockchain Academy has become 
                a popular choice for those looking to advance their education or learn the new technology.</p>
       
        <div className="con2r flex py-3 space-x-10 mt-5 ">
            <button className="button1 flex">LEARN MORE<span className='px-2 py-1'><FaLongArrowAltRight /></span></button>
            <button className="button1 w-[200px] flex ">WHAT IS KAIRAA<span className='px-2 py-1'><FaLongArrowAltRight /></span></button>
        </div> </div>

    </div>
{/*-----------------------------------------------------container3-------------------------------------------------*/}
<div className="container3 w-full h-screen">
    <div className="w-100% h-[100px]">
<video autoPlay loop muted>
                <source src={forvedio1} type="video/mp4"/>
                </video>
    <div className=" w-full h-[80px] blue flex flex-row grid-col-3 gap-6 space-x-4 px-24 p-10">
             
        <div className="blue1">

            <h2><img className="w-[120px] h-[120px]" src={Verified}/>Learn technologies From Experts</h2>
            <h4>Blockchain courses we provide students with in-depth, specialized knowledge.</h4>
        </div>
        <div className="blue2">
            <h2><img className="w-[120px] h-[120px]"src={openbook}/>Over 30+ High Quality Topics</h2>
            <h4>Topics cover a wide range of subjects, from blockchain and and much more.</h4>
        </div>
        <div className="blue3">
            <h2><img className="w-[120px] h-[120px]"src={player}/>Event & Program Video Update</h2>
            <h4>Kairaa Blockchain Academy keeps its students informed about events and programs.</h4>
        </div></div>
    </div>
</div>

{/*----------------------------------------------------container4-----------------------------------------------------------------*/}

<div class="container4 w-full h-screen px-24">
    <div className="w-full h-[60px]">
    <h2 className="text-5xl text-black text-center ">Expand Your Blockchain</h2>
    <h2 className="text-5xl text-black text-center">Knowledge</h2>
   
    </div>
    <div className="flex flex-row space-x-5 mt-20">
    <div class="flex-col justify-center p-5 border">
    <img className="blockimg object-cover rounded-xl"src={Def}/>
    <h1 className="mt-3 p-5 ">Decentralizing Finance: Mastering the DeFi</h1>
    <p className="p-5 py-7">The DeFi Expert Certification Course is an essential program for anyone interested in gaining a d...</p>
   <div className='px-24'> <button className="button mb-2 flex justify-center">View More<span className='py-1 px-2'><FaLongArrowAltRight /></span></button>
    </div></div>


    <div class="flex-col justify-center p-5 border">
    <img className="blockimg object-cover rounded-xl" src={Hyber}/>
    <h1 className="mt-3 p-5">Hyperledger Mastery: Becoming a Certified Expert</h1>
    <p className="p-5 py-4">The Hyperledger Expert Certification Course is a comprehensive program designed to equip you with...</p>
    <div className='px-24'><button className="button mb-2 flex justify-center">View More<span className='py-1 px-2'><FaLongArrowAltRight /></span></button>
    </div></div>


    <div class="flex-col justify-center p-5 border">
    <img className="blockimg object-cover rounded-xl" src={blockchain} alt='' />
    <h1 className="mt-3 p-5">Blockchain Revolution: From Basics to Mastery</h1>
    <p className="p-5 py-4 ">The Hyperledger Expert Certification Course is a comprehensive training program that will provide...</p>
    <div className='px-24  '> <button className="button mb-2 flex text-center justify-center">View More<span className='py-1 px-2'><FaLongArrowAltRight /></span></button>
    </div></div>

    </div>
</div>


{/*--------------------------------------------container5-------------------------------------------------------------*/}
<section5 className="w-full h-screen">
<div className="flex flex-row w-full  px-24 py-24 space-x-3 ">
    <div className="container5 flex flex-row ">
        <div className="flex bg-green-200 p-5 ">
           <div><h1 className="text-3xl text">Start Your Career</h1>
            
            <p className="text-[17px]">Kairaa is a great place to start your career in the IT industry. The company offers a variety of opportunities
                 for growth.</p>
                 <butttom className="button1  bg-yellow-100 text-[12px] text-black">JOIN WTH US</butttom>
                 </div> <div> <img className="w-[180px] h-[140px]"src={Flower}/></div>
            </div>
          
       </div>
       <div className="container5 flex flex-row">
        <div className="flex bg-yellow-100 p-5"><div>
           <h1 className="text-3xl text">Learn Blockchain</h1>
            
            <p className="text-[17px]">We offers a wide range of blockchain
                                    courses that are designed to help
                    students advance their education.</p>
                    <butttom className="button1 bg-green-200 text-[12px] text-black">BUY COURSE</butttom>
                </div><div>  <img className="w-[180px] h-[140px]"src={Flower1}/></div>
            </div>
          
       </div>
       </div>
    
    
        
</section5>
{/*--------------------------------container6-----------------------------------------------*/}

<section6 className="w-full mt-10 ">
<div className="flex flex-row  px-24 py-20">
<div className="w-[50%] h-[500px] mt-20 mr-[-40px] z-10"><img  className="w-[38%] h-[500px]  index"src={Education8}/></div>
    <div className="w-[80%] h-[650px] bg-slate-100  p-8 pl-9 ">
        <div className="ml-28 py-20"><button className="h-[40px] rounded-xl text-white align-middle text-center py-2 justify-center w-[200px] bg-slate-400">Free Session</button>
        <h1 className="he1 mt-6 mb-2">Participate In The Training Session</h1>
        <p className="text-[16px] mb-5">Every Saturday, Kairaa Blockchain Academy offers a free blockchain overview demo class. Participants should 
            register for the blockchain overview session as soon as possible (worth of 1,000 Rupees).</p>
            <div className="flex flex-row space-x-9 text-[20px] mb-7 ">
                <h2 className='flex '> <span className='px-2'><FaRegCheckCircle /></span>Free Demo</h2>
                <h2 className='flex '><span className='px-2'><FaRegCheckCircle /></span>Worth of 1,000 Rs</h2>
            </div>
            <button className="h-[40px] rounded-2xl text-white align-middle text-center py-2 justify-center w-[200px] bg-teal-700 flex button:hover">COMING SOON!<span className='px-2 py-1'><FaLongArrowAltRight /></span></button>
    </div></div>
</div>
</section6>
{/*-----------------------------------------------container7--------------------------------------------------------------*/}
<section7 className="">
    <div className="flex flex-col">
        <div className="text-center mt-3 mb-5">
            <button className="button2">NEWS&BLOG</button>
        </div>
        <div className="flex flex-col he1 text-center">
            <h1 className="text-5xl">Check Out The Recent</h1>
            <h1 className="text-5xl">News & Blogs</h1>
        </div>
    </div>
<div className="flex flex-row px-24 py-8 ">
    <div>
<img className=" w-[600px] h-[450px]"src={Education2}/>
    </div>
    <div className="w-1/2 flex flex-row space-x-3 ml-3 mt-8">
        <div className=" bg-cyan-100 h-[400px]">
        <img src={blob1}/>
        <div className="w-[60px] h-[80px] bg-blue-600 text-center h1index ">
        <h1 className="text-black text-2xl">22</h1><span>Jan 2024</span>
        </div>
        <a  className="ml-20 mt-5">By Roman</a>
        <div className="mt-5  ">
        <a><h1 className="mt-6 ml-2">Why Are Smart Contracts A Potential...</h1></a>
        <p className="text-[18px] mb-5" >A smart contract is a blockchain-based contract...</p>
        <a className="w-[200px] h-[30px] bg-red-400 p-3 mt-10 ml-20 text-[14px]">READ MORE</a>
        </div></div>
        <div className=" bg-cyan-100 h-[400px]">
        <img src={blob2}/>
        <div className=" w-[60px] h-[80px] bg-blue-600 text-center h1index ">
            <h1 className="text-black text-2xl ">22</h1><span>Jan 2024</span>
        </div>
        
        <a className="ml-20 mt-5">By Somalia</a>
        <div className="mt-5">
        <a><h1 className="mt-6 ml-2">Understanding the Interdependence of...</h1></a>
        <p className="text-[18px] mb-3">Web3 and Blockchain are often considered parallel...</p>
        <a className="w-[200px] h-[30px] bg-red-400 p-3 mt-10 text-[14px] ml-20">READ MORE</a>
        </div>
    </div></div>
    
</div>
<div className="text-center mt-10">
        <button className="w-[200px] h-[40px] border-4 font-semibold text-[20px] rounded-1xl">VIEW MORE...</button>
    </div>

</section7>
        

      </section>
      
  
  )
}



