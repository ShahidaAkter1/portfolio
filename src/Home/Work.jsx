import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useProjects from '../hooks/useProjects';
import WorkDetails from './WorkDetails';
// import Modal from './Modal';

const Work = () => {

    const [state,setState]=useState(true);


    const [projects] = useProjects();
    // console.log(projects);

    const react = projects.filter(reactData => reactData.category === 'React JS');
    // console.log( 'react data', react);

    const html = projects.filter(reactData => reactData.category === 'HTML & CSS');
    // console.log( 'html data', html);

    const js = projects.filter(reactData => reactData.category === 'JavaScript');
    // console.log( 'js data', js);




    const [showData, setShowData] = useState([]);

    const handleData = (type) => {

        if (type === 'all') {

            setState(false);
            setShowData(projects);
        }
        else if (type === 'js') {
            setState(false);
            setShowData(js)
        }
        else if (type === 'react') {
            setState(false);
            setShowData(react);
        }
        else if (type === 'html') {
            setState(false);
            setShowData(html);
        }


    }







    return (
        <div name='skills' className=' text-gray-300 w-full  '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl  py-4 inline font-bold border-b-4 border-pink-600  '>Projects</p>
                    <p className='py-12'>Check out some of my recent work.</p>
                </div>

                {/* button */}
                <div className='gap-8 mx-auto '>
                    <button onClick={() => handleData('all')} className="btn btn-outline btn-warning m-4">ALL</button>
                    <button onClick={() => handleData('html')} className="btn btn-outline btn-primary m-4">HTML & CSS</button>
                    <button onClick={() => handleData('js')} className="btn btn-outline btn-secondary m-4">JAVASCRIPT</button>
                    <button onClick={() => handleData('react')} className="btn btn-outline btn-error m-4">REACT JS</button>
                </div>

                {/* container  */}
                <div className='w-full  grid  md:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8'>

                    {state &&
                        projects.map(categoryData => <WorkDetails
                            key={categoryData._id}
                            categoryData={categoryData}
                        ></WorkDetails>)
                    }


                    {
                        showData.map(categoryData => <WorkDetails
                            key={categoryData._id}
                            categoryData={categoryData}
                        ></WorkDetails>)
                    }
                    {/* <Modal></Modal> */}

                </div>

            </div>



        </div>
    );
};

export default Work;