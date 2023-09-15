import React from 'react';

const ProjectCard = ({item}) => {

    const { img, title, description, link } = item;

    return (
        <>
        <div class=" w-full rounded-lg flex justify-center  shadow bg-indigo-800">
            <div className='flex flex-col'>
                <a href={link} target='_blank' rel="noopener noreferrer" className='flex justify-center items-center'>
                    <img class="p-2 rounded-t-lg" src={img} alt="product image" />
                </a>
                <div class="px-5 pb-2 items-center flex-col justify-center ">
                    
                    <h5 class="text-lg font-semibold text-start text-white">{title}</h5>
                </div>
                <div class="px-5 pb-5 items-center flex-col justify-center ">
                    <p class="text-sm text-start text-indigo-200">{description}</p>
                </div>

            </div>
        </div>
        </>
    );
};

export default ProjectCard;