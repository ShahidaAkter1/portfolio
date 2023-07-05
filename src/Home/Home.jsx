import React from 'react';
 
 
import SocialMedia from './SocialMedia';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Projects from './Projects';

 

const Home = () => {
    return (
        <div id='home' className='bg-[#0a192f] text-white' name='home'>


         
            <SocialMedia></SocialMedia>
            <HeroSection></HeroSection>
          
            <About></About>
            <Skills></Skills>
            {/* <Experience></Experience> */}
            {/* <Work></Work> */}
            <Projects></Projects>
            <Contact></Contact>

 








        </div>


    );
};

export default Home;