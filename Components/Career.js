
import Forback1 from '../assets/forback6.jpg'
import Caree1 from '../assets/join-team1.jpg'
import Caree2 from '../assets/join-team3.jpg'
import Caaree3 from '../assets/career_2.png'
import  { React,useState } from 'react';
import { useForm } from "react-hook-form";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import './Career.css'



import {Link} from 'react-router-dom'
import { MdDoubleArrow } from "react-icons/md";


export const Career = () => {

  const slides = [
    {
      url:'https://soject.com/wp-content/uploads/2021/04/1_j18U6uvAg-ta2XBvDKNQlA.jpeg',
     },
    {
      url: 'https://itechnolabs.ca/wp-content/uploads/2021/03/laravel-1.png',
    },
    {
      url: 'https://mobilethinking.ch/wp-content/uploads/2019/03/1_A-tfdwH0aI44aB9odErs5Q.jpeg',
    },

    {
      url: 'https://www.oaklandassociates.co.uk/wp-content/uploads/2018/08/it-support-hp-slider-1030x628.jpg',
    },
    {
      url: 'https://images.alphacoders.com/123/1239282.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

{/*-------------------------------------------------------------------*/}
const { register, handleSubmit, formState: { errors } } = useForm();
 
    const onSubmit = (data) => console.log(data);



  {/*---------------------------------------------------------*/}
  return (
        



    <section6 className='w-full h-full'>
    <div className='md:w-full md:h-full'>
    <div className='overlay'></div>
      
        <img  className='md:h-[700px] md:w-full object-cover' src={Forback1}/>
        <div  className='content'>
          <h1 className='font1 text-6xl'>
          Start Your Career
          </h1>
          <div className='flex w-full align-middle justify-center py-5'>
        <Link to="/">Home</Link><MdDoubleArrow size={20}/><p className='border-b-2 border-b-red-200'>Career</p></div>
      </div>
    </div>
    <div>
   </div>
   {/*-------------------------------container2--------------------------------*/}
   
    <div className='flex p-32 h-full w-full '>
    <div className='w-1/2 flex p-4'>
      <div className='flex-col'>
        <img className='w-[240px] h-[330px] py-3' src={Caree1}/>
        <img className='w-[240px]'src={Caree2}/>
      </div>
      <img className='h-[500px] w-[270px] px-3 py-16'src={Caaree3}/>
    </div>
    <div className='w-1/2 p-7'>
      <h1 className='text-[21px] text-blue-700'>Your Gateway to a Successful Career</h1>
      <h2 className='text-[40px] text-[#262d3d] py-4'>Start Your Career</h2>
      <p className='text-[19px] font-light py-3'>Kairaa Academy is a leading provider of online blockchain and technology courses. We are on a mission to empower the future of education by making high-quality education accessible and affordable htmlFor everyone. We are looking htmlFor talented and
         passionate individuals to join our team and help us achieve our mission. We offer a variety of roles.</p>
         <p className='text-[19px] font-light py-3'>Why Join Kairaa Academy?</p>
         <p className='text-[19px] font-light py-3'>Competitive salaries and benefits</p>
            <p className='text-[19px] font-light py-2' >A supportive and collaborative work environment</p>
            <p className='text-[19px] font-light py-2'>Opportunities htmlFor professional growth and development</p>
            <p className='text-[19px] font-light py-2'>The chance to make a real difference in the world</p>
      </div>
    </div>
    {/*----------------------------------------------------------------------------------------------------*/}
    
    <div className='max-w-[900px] h-[600px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-200'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
          {/*----------------------------------------------------------------------------------------------------------------*/}
<div className='w-full h-full py-4'>

  
  <div className=' bg-slate-100  rounder p-16 ml-48 mr-48 py-4 justify-center'>
    <div className='text-center'>
    <h1 className='font-semibold text-blue-600 text-[20px] py-2'>Register your details here to</h1>
    <h2 className='text-4xl text-black py-3'> Start Career With Kairaa</h2>
    </div>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className='flex grid-cols-2 py-3 justify-center gap-3'>
      <div ><label>Enter Your Name</label><input className='rounded h-[50px] w-[260px]' type='name' placeholder='Enter your name' {...register("name")}></input></div>
      <div ><label>Enter Your Second Name</label><input className='rounded h-[50px] w-[260px]' type='name' placeholder='Enter second name' {...register("name")}></input></div>
      <div ><label>Enter Your Email</label><input className='rounded h-[50px] w-[260px]' type='email' placeholder='Email Address'{...register("email",
       { required: true })} />
               {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}</div>
      <div ><label>Enter Mobile Number</label><input className='rounded h-[50px] w-[260px]' type='number' placeholder='Mobile Number'{...register("number")}></input></div>

    </div>

    <div className='flex grid-cols-3 py-3 justify-center gap-3'>
      <div ><label>Experience</label><input className='rounded h-[50px] w-[200px]' type='name' placeholder='Experience' {...register("name")}></input></div>
      <div ><label>Expected Salary</label><input className='rounded h-[50px] w-[200px]' type='name' placeholder='Salary' {...register("name")}></input></div>
      <div ><label>Your City</label><input className='rounded h-[50px] w-[200px]' type='name' placeholder='Your City' {...register("name")}></input></div>
      </div>

      <div className='flex grid-cols-2 py-3 justify-center gap-3'>
      <label for="browser">Position</label>
      <input className='rounded h-[50px] w-[260px]' list="browsers" placeholder='select position' name="browser" id="browser"/>
      <datalist id="browsers">
    <option value="Full Stack"></option>
    <option value="Block Chain"></option>
    <option value="BackEnd developer"></option>
    <option value="Web developer"></option>
    <option value="Laravel Developer"></option>
    <option value="Support"></option>
    </datalist>
    <label for="myfile">Add Resume</label>
  <input className='rounded h-[50px] w-[260px]' type="file" id="myfile" name="myfile"/><br/><br/> 
  
  
  </div>




    <div className='' ><input className='rounded h-[160px] w-full' type='name' placeholder='Write Message'></input></div>
   <div className='justify-center text-center py-4'> <button className='bg-cyan-500 rounded-xl text-white font-semibold text-xl h-[50px] w-[180px]'>Send Message</button>
   </div>
    </form>
  </div>
  
</div>



    {/*-----------------------------------------------------------------------------------------------------------------------*
    <div className='bg-cyan-200 w-full h-full'>
       <div className='justify-center text-center p-4 py-5'>
        <h1 className='text-blue-500 text-xl font-normal py-3'>Register your details here to</h1>
        <h2 className='text-5xl text-black font-bold'>Start Career With Kairaa</h2>
       </div>
       <div>
       
       <form className=" w-full h-full bg-slate-100 justify-center text-center " onSubmit={handleSubmit(onSubmit)}>
               <div className='flex justify-center py-4 space-x-5'>
                <lable>Enter Name</lable><input  type="name" placeholder='Enter Your Name'{...register("name")} />
                <label>Enter Second Name</label><input  type="name" placeholder='Enter Second Name'{...register("name")} />
                </div>
                <div className='flex justify-center py-4 space-x-5'>
               <label>Enter Email</label> <input type="email" placeholder= 'Enter Your Email'{...register("email", { required: true })} />
               {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
               <label>Enter Password</label><input type="password" placeholder='password' {...register("password")} /></div>
               <div className='flex justify-center py-4 space-x-5'>
                <lable>Experience</lable><input  type="name" placeholder='Experience'{...register("name")} />
                <label>Expected Salary</label><input  type="name" placeholder='Salary'{...register("name")} />
                <label>Your City</label><input  type="name" placeholder='Current City'{...register("name")} />
                </div>

                <div className='flex justify-center py-4 space-x-5'>
      <label for="browser">Position</label>
      <input list="browsers" placeholder='select position' name="browser" id="browser"/>
      <datalist id="browsers">
    <option value="Full Stack"></option>
    <option value="Block Chain"></option>
    <option value="BackEnd developer"></option>
    <option value="Web developer"></option>
    <option value="Laravel Developer"></option>
    <option value="Support"></option>
    </datalist>
    <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile"/><br/><br/>
  </div>
               

                <input className='w-[120px] h-[40px] rounded text-black'type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form></div>
        </div>   */}
    
    </section6>

    


  )
}
