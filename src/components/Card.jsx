import React from 'react';

const Card = ({item}) => {

    const { img, title, percentage } = item;

    return (
        <>
        <div class=" w-40 rounded-lg flex justify-center items-center shadow bg-indigo-800">
            <div className='flex flex-col'>
                <a className='flex justify-center items-center'>
                    <img class="p-2 rounded-t-lg" src={img} alt="product image" />
                </a>
                <div class="px-5 pb-5 items-center flex-col justify-center ">
                    
                    <h5 class="text-lg font-semibold text-center text-white">{title}</h5>
                    
                    <div class=" mt-2.5">
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{percentage}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Card;