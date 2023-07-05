import React, { useEffect } from 'react';
import html from '../../public/html.png';
import css from '../../public/css.png';
import bootstrap from '../../public/BOOTSTRAP.avif';
import tailwind from '../../public/tailwind.png';
import javascript from '../../public/javascript.png';
import react from '../../public/react.png';
import firebase from '../../public/firebase.webp';
import nodeJs from '../../public/nodejs.png';
import expressJs from '../../public/express js.png';
import mongodb from '../../public/mongodb.png';
import github from '../../public/github.png';
import nextJs from '../../public/nextJs.png';

import Aos from 'aos';
import 'aos/dist/aos.css';




const Skills = () => {

    useEffect(() => {
        Aos.init(
            {
                duration:200
            }
        );
    })
    return (
        <div id='skill' name='skills' className=' text-gray-300' >

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl  py-4 inline font-bold border-b-4 border-pink-600  '>Technical Skills</p>

                    <p className='py-12'>These are the technologies I've worked with.</p>
                </div>


                <div className='w-full  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8'  >
                  
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg'  data-aos="fade-right" data-aos-offset="500"  data-aos-easing="ease-in-sine">
                        <img className='w-20 mx-auto mt-3' src={html} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-left"data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={css} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-right" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={bootstrap} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={tailwind} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-right" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={javascript} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000"> 
                        <img className='w-20 mx-auto mt-3' src={react} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-right" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={firebase} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={nodeJs} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>Node JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-right" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={expressJs} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>Express JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={mongodb} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-right" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={github} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'> GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg' data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                        <img className='w-20 mx-auto mt-3' src={nextJs} alt="" />
                        <p className='my-4 text-black font-bold text-2xl'> Next Js</p>
                    </div>
                   



                </div>


              



            </div>


        </div>
    );
};

export default Skills;