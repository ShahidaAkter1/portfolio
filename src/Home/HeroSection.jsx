import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img from '../assets/img.jpg'

const HeroSection = () => {
    return (
       <div>
     <div className="flex flex-col lg:flex-row-reverse items-center px-16">
     <div className="">
           <img src={img} alt='' className="w-[400px] h-[400px] lg:mr-96 rounded-full" />
         </div>

         <div className='max-w-[1000px] lg:ml-36 py-24  flex flex-col justify-center h-full'>

            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Shahida Akter</h1>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a MERN Stack Developer</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias a consequuntur perferendis natus sapiente vero explicabo sequi aliquid quasi? Aspernatur, reiciendis debitis quam nulla distinctio, praesentium, eligendi sit illo beatae sequi voluptates qui voluptate culpa at nihil ducimus harum!</p>


            <div>
                <button className="btn btn-outline btn-success group"> 
                <a href="../../public/resume.png" download='Resume'>Download resume </a>
                <FaArrowRight className='group-hover:rotate-90 duration-300 text-2xl ml-4'></FaArrowRight></button>
        </div>


       

</div>
     </div>
       </div>

  
    );
};

export default HeroSection;