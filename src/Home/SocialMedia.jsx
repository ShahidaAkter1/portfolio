import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <div className='lg:flex fixed flex-col hidden   top-[35%] left-0  '>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                <Link to='https://www.facebook.com/shahida.akhter.353250' className='flex justify-between items-center w-full text-gray-300 ml-4'> Facebook <FaFacebook className='mr-6 text-2xl'></FaFacebook> </Link>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-green-600'>
                <Link to='https://github.com/ShahidaAkter1' className='flex justify-between items-center w-full text-gray-300 ml-4'> Github <FaGithub className='mr-6 text-2xl'></FaGithub> </Link>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-600'>
                <Link to='https://www.linkedin.com/in/shahida-akter-235364279/' className='flex justify-between items-center w-full text-gray-300 ml-4'> Linkedin <FaLinkedin className='mr-6 text-2xl'></FaLinkedin> </Link>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                <Link to='https://mail.google.com/mail/u/0/#inbox' className='flex justify-between items-center w-full text-gray-300 ml-4'> Gmail <FaFacebook className='mr-6 text-2xl'></FaFacebook> </Link>
            </li> */}
        </ul>
    </div>
    );
};

export default SocialMedia;


/*
image scroll------------    

<div className="relative max-w-full h-72 overflow-hidden rounded-lg">
<div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
<img
src="https://i.ibb.co/.../Whats-App-Image-2023-06-14-at-8-32..."
alt=""
className="w-full object-cover object-top rounded-lg"
/>
</div>
</div>

*/