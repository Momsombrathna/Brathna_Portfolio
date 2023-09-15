import React from 'react';
import { MdWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import ProjectCard from '../components/ProjectCard';
import { project } from '../data/data';

function Project(props) {
    return (
        <>
        <section className='mt-16'>
            <div className='flex items-center flex-col justify-center'>
            <div className='flex flex-row bg-white px-2 py-1 rounded-lg items-center justify-center'>
                    < MdWorkOutline className='text-gray-800 text-2xl' />
                    <h1 className=' text-gray-800 text-xl pl-2 font-bold'>PROJECT</h1>
            </div>
            
            {/* ---------------------Languages--------------------------- */}
            <div className='mt-16'>


            <div className=' w-full'>
            <div className='container mx-auto'>
                    <div className='grid grid-cols-2  gap-4'>
                        {
                            project.map((item)=>{
                                return(
                                    <ProjectCard key={item.id} item={item} />
                                )
                            })
                        }
                    </div>
            </div>
            </div>  
            </div>
            
            

            </div>
        </section>
        </>
    );
}

export default Project;