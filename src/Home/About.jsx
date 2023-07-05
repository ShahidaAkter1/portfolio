import React from 'react';
import animation from '../../public/animation.gif'

const About = () => {
    return (



        <div className="hero w-full  bg-[#0a192f] text-white">


            <div>

                
                <h1 className="text-4xl  py-4 inline font-bold border-b-4 border-pink-600 ">About Me</h1>





                <div className="hero-content flex-col lg:flex-row gap-8 ">

                    <div className="pt-4 w-[500px]" >

                        {/* <p className="py-6 text-4xl text-right">Hi. I'm client,nice to meet  <br />you.Please take a look <br /> around</p> */}
                        <img  src={animation} alt="" />
                    </div>




                    <div className=" flex-shrink-0 w-full max-w-sm text-justify">
                        <p>Hello! I'm Shahida Akter, from Dhaka, Bangladesh. I recently completed a Bachelor's degree in Computer Science and Engineering from Southeast University. </p>
                        <p>I have acquired a solid comprehension of fundamental software development principles and practices. My educational background, coupled with practical experience in constructing applications using MongoDB, Express.js, React, and Node.js, equips me with the ability to create resilient and expandable solutions.</p><br/>
                        <p>I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I'm all ears! Feel free to explore my resume below to gain a better understanding of my skills and experience. Let's connect and bring your project to life together!</p>
                    </div>





                </div>
            </div>
        </div>




    );
};

export default About;