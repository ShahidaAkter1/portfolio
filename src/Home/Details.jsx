import React from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../hooks/useProjects';

const Details = () => {
    const projectId=useParams();
    const {id}= projectId;
    console.log(id);

    

    const [projects] = useProjects();
    // console.log(projects);

    const details = projects.filter(detailsData => detailsData._id === id);
    console.log( 'details data', details);

    const [project]=details;
    const {category,clientLink,description,features,image,liveLink,projectName,serverLink}=project;

    return (

<div className="card-body">
<div className=''>
    <div className="card w-full h-36 shadow-2xl">
    {/* <figure><img src={image} alt="Album"/></figure> */}
        <div className="card-body ">
            <h1 className='text-center text-2xl'>{projectName}</h1>
            <p className='text-center text-red-600'>{description}</p>
            <p className='text-center text-red-600'>{features}</p>
        </div>
    </div>
</div>
</div>

    );
};

export default Details;