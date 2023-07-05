import React from 'react';
import  cosmeticCraft from '../../public/cosmeticCraft1.png'
import  eduToys from '../../public/eduToys.png'
import  chefRecipe from '../../public/chefRecipe.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
<div id='project' name='skills' className=' text-gray-300 w-full  '>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl  py-4 inline font-bold border-b-4 border-pink-600  '>Projects</p>
                    <p className='py-12'>Check out some of my recent work.</p>
                </div>


        <div className='w-full  grid  md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8'>

            {/* CosmetiCarft project */}

           <div className="card w-80 bg-base-100 text-black shadow-xl">
            <figure><img className='h-[150px] w-screen' src={cosmeticCraft} alt="Shoes" /></figure>
            <div className="card-body bg-slate-50">
                <h2 className="card-title font-bold -mt-8">
                CosmetiCraft
                
                </h2>
                <p className='text-justify font-normal text-xs'>Our cosmetic makeup school website offers hands-on training and cutting-edge techniques to empower aspiring makeup artists.</p>
                <h2 className='text-left font-bold text-lg'>Features:
                 
                       <span className='font-normal text-xs text-justify'>
                       <li>Simplify class selection, booking, and payment process for students, ensuring a seamless and secure experience.</li>
                        <li> Empower instructors with tools to efficiently add, monitor, and update classes, as well as receive valuable feedback from enrolled students.</li>
                        <li> Provide administrators with a centralized dashboard for managing classes, including the ability to approve or deny class requests, communicate with instructors, and manage user accounts.</li>
                       </span>
                   
                </h2>
                <div className="card-actions justify-end">
                   <Link to="https://github.com/ShahidaAkter1/summer-camp-school-client"> <button className="btn btn-warning text-white text-xs">Client Link</button></Link>
                  <Link to="https://github.com/ShahidaAkter1/summer-camp-school-server"> <button className="btn btn-secondary text-white text-xs">Server Link</button></Link>
                  <Link to="https://summer-camp-school-154eb.web.app/"> <button className="btn btn-primary text-white text-xs">Live Link</button></Link>
                </div>

            </div>
            </div> 


            {/* 2.	EduToys  */}
            <div className="card w-80 bg-base-100 text-black shadow-xl">
            <figure><img className='h-[150px] w-screen' src={eduToys} alt="Shoes" /></figure>
            <div className="card-body bg-slate-50">
                <h2 className="card-title font-bold -mt-8">
                EduToys
                
                </h2>
                <p className='text-justify font-normal text-xs'>Our educational toy website offers a diverse selection of engaging toys that combine fun and learning. </p>
                <h2 className='text-left font-bold text-lg'>Features:
                 
                       <span className='font-normal text-xs text-justify'>
                       <li>This is an Educational Toy website. There are some categories. Like: Science Toys, Math Learning Toys and
Engineering Toys.All has some information</li>
                        <li> There are All Toys,My Toys and Add Toys route. Users can add,update and delete toy information.</li>
                        <li> Website is responsive for mobile, laptop and desktop. Data stored and integrated from MongoDB.</li>
                       </span>
                   
                </h2>
                <div className="card-actions justify-end">
                   <Link to="https://github.com/ShahidaAkter1/toy-marketplace-client-side"> <button className="btn btn-warning text-white text-xs">Client Link</button></Link>
                  <Link to="https://github.com/ShahidaAkter1/toy-marketplace-server-side"> <button className="btn btn-secondary text-white text-xs">Server Link</button></Link>
                  <Link to="https://dolls-client.web.app/"> <button className="btn btn-primary text-white text-xs">Live Link</button></Link>
                </div>

            </div>
            </div> 


            {/*3.	Chef Recipe  */}
            <div className="card w-80 bg-base-100 text-black shadow-xl">
            <figure><img className='h-[150px] w-screen' src={chefRecipe} alt="Shoes" /></figure>
            <div className="card-body bg-slate-50">
                <h2 className="card-title font-bold -mt-8">
              Chef Recipe 
                
                </h2>
                <p className='text-justify font-normal text-xs'>A chef recipe website is an online platform that provides a collection of recipes from various chefs and culinary experts.  </p>
                <h2 className='text-left font-bold text-lg'>Features:
                 
                       <span className='font-normal text-xs text-justify'>
                       <li>Some Chef Details appear on the home page. By clicking the VIEW RECIPE button, the user can see all the chef's details.</li>
                        <li> Website is responsive for mobile, laptop and desktop. Data stored and integrated from MongoDB.</li>
                        <li> It has an Authentication System.</li>
                       </span>
                   
                </h2>
                <div className="card-actions justify-end">
                   <Link to="https://github.com/ShahidaAkter1/chef-recipe-hunter-client-side"> <button className="btn btn-warning text-white text-xs">Client Link</button></Link>
                  <Link to="https://github.com/ShahidaAkter1/chef-recipe-hunter-server-side"> <button className="btn btn-secondary text-white text-xs">Server Link</button></Link>
                  <Link to="https://chef-recipe-client-7da5e.web.app/"> <button className="btn btn-primary text-white text-xs">Live Link</button></Link>
                </div>

            </div>
            </div> 

        </div>

{/*  */}

{/* <div className="card card-side bg-base-100 text-black shadow-xl">
  <figure><img className='h-[450px] w-[1800px] ' src={cosmeticCraft} alt=""/></figure>
  <div className="card-body ">
  <h2 className="card-title text-left font-bold text-2xl">
                CosmetiCraft
                
                </h2>
                <p className='text-justify '>Our cosmetic makeup school website offers hands-on training and cutting-edge techniques to empower aspiring makeup artists. </p>
                <h2 className='text-left font-bold text-lg'>Feature:
                 
                       <span className='font-normal text-justify'>
                       <li>Student Class Booking and Payment: Allow students to select and book classes, process secure payments, and provide a dashboard for managing selected and enrolled classes</li>
                        <li>Instructor Class Management: Enable instructors to add and manage classes, view the number of enrolled students, receive feedback, and update class information.</li>
                        <li>Admin Dashboard and Class Approval: Create an admin dashboard for managing classes, including class approval or denial, sending feedback to instructors, and user management functionalities.</li>
                       </span>
                   
                </h2>
    <div className="card-actions justify-end">
    <Link to="https://github.com/ShahidaAkter1/summer-camp-school-client"> <button className="btn btn-warning text-white">Client Link</button></Link>
                <Link to="https://github.com/ShahidaAkter1/summer-camp-school-server"> <button className="btn btn-warning text-white">Server Link</button></Link>
                <Link to="https://summer-camp-school-154eb.web.app/"> <button className="btn btn-primary text-white">Live Link</button></Link>
    </div>
  </div>
</div> */}



</div>
</div>
       
    );
};

export default Projects;