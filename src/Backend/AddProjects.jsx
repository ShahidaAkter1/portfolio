
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import Multiselect from 'multiselect-react-dropdown';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
//  console.log(img_hosting_token);



const AddProjects = () => {

    const [options,setOptions]=useState(['HTML','CSS','JS','React'])
    const [features,setFeatures]=useState([]);
    console.log("features array :",features);

    // console.log(options);

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    //  console.log(img_hosting_url);




    const onSubmit = data => {
        console.log(data);

        // TODO: backend code

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    // console.log(imgURL);
                    // console.log(data);


                    // const { className, email, instructorName, price, totalSeat } = data;
                    const { projectName, serverLink, clientLink, description, category,liveLink } = data;



                    const newProjects = { projectName, serverLink, clientLink,liveLink, category, description, image: imgURL, features };

                    // const newProjects = { className, email, instructorName, price: parseFloat(price), totalSeat:parseInt(totalSeat),available_seat:parseInt(totalSeat), image: imgURL,status:'pending',feedback:'none' };



                    console.log(newProjects);


                    fetch('http://localhost:5000/projects', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newProjects)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);

                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Projects added successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                            }

                        })
                }
            })


    }




    return (
        <div >



            <form className='-mt-12' onSubmit={handleSubmit(onSubmit)} >

                <div className="hero-content w-full   ">



                    <div className="   w-full   shadow-2xl bg-base-800 border  ">
                        <div className="card-body">





                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Project Name</span> </label>
                                <input type="text"
                                    {...register("projectName", { required: true, maxLength: 100 })}
                                    placeholder="Enter your project name"
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                                {errors.className && <span className='text-red-600 mt-2'>Project name field is required</span>}
                            </div>


                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Server Side Link  </span> </label>
                                <input type="text"
                                    {...register("serverLink", { required: true, maxLength: 100 })} placeholder="Enter your  server link  "
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                                {errors.className && <span className='text-red-600 mt-2'>Server side link field is required</span>}
                            </div>

                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Client Side Link  </span> </label>
                                <input type="text"
                                    {...register("clientLink", { required: true, maxLength: 100 })} placeholder="Enter your  client link  "
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                                {errors.className && <span className='text-red-600 mt-2'>Client side link field is required</span>}
                            </div>

                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">  Live Link  </span> </label>
                                <input type="text"
                                    {...register("liveLink", { required: true, maxLength: 100 })} placeholder="Enter your  github  link  "
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                                {errors.className && <span className='text-red-600 mt-2'>   live link field is required</span>}
                            </div>



                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Project Short Description </span> </label>
                                <textarea
                                    {...register("description", { required: true, maxLength: 100 })}
                                    className="textarea textarea-accent bg-white text-black" placeholder="Short description"></textarea>
                                {errors.className && <span className='text-red-600 mt-2'>Short description field is required</span>}
                            </div>


    

                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Features</span> </label>

                                <Multiselect

                                isObject={false}
                                options={options}
                                onRemove={(event)=>{event}}
                                // onSelect={(event)=>{event}}
                                 onSelect={(event)=>{
                                    // console.log(event);
                                    setFeatures(event)
                                 }}
                                showCheckbox
                                 
                                ></Multiselect>
                            </div>

                      


                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Category  </span> </label>
                                <select
                                    {...register("category", { required: true, maxLength: 100 })}
                                    className="select select-accent w-full bg-white text-black">

                                    <option>HTML & CSS</option>
                                    <option>JavaScript</option>
                                    <option>React JS</option>
                                </select>
                                {errors.className && <span className='text-red-600 mt-2'>Category   field is required</span>}
                            </div>




                            <div class="form-control w-full my-4 ">
                                <label class="label">
                                    <span class="label-text text-black">Class Image*</span>
                                </label>
                                <input type="file"
                                    {...register("image", { required: true })}
                                    class="file-input file-input-bordered w-full bg-white  " />
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><input type="submit" value='Register' /></button>
                            </div>


                        </div>
                    </div>
                </div>

            </form>


            <ToastContainer />

        </div>
    );
};

export default AddProjects;