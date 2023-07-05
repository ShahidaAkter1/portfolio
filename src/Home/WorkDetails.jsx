import React from 'react';
import { Link } from 'react-router-dom';

const WorkDetails = ({categoryData}) => {
    console.log(categoryData);
    const {category,clientLink,description,features,image,liveLink,projectName,serverLink}=categoryData;
    return (
        <div style={{ backgroundImage: `url(${image})` }}  className='shadow-lg shadow-[#040c16]  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>

        <div className='opacity-0  group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
                React JS application
            </span>
            <div className='pt-8 text-center'>
                <Link> <button className="btn btn-primary text-white">Demo</button></Link>
                <Link> <button className="btn btn-warning text-white">Code</button></Link>
                <Link> <button className="btn btn-secondary text-white">Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default WorkDetails;