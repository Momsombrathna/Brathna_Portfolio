import React from 'react';

const SmallCard = ({item}) => {

    const { img, title } = item;

    return (
        <>
        <div class=" w-40 rounded-lg flex justify-center items-center shadow bg-indigo-800">
            <div className='flex flex-col'>
                <a className='flex justify-center items-center'>
                    <img class="p-2 rounded-t-lg" src={img} alt="product image" />
                </a>
                <div class="px-5 pb-5 items-center flex-col justify-center ">
                    <h5 class="text-lg font-semibold text-center text-white">{title}</h5>
                </div>
            </div>
        </div>
        </>
    );
};

export default SmallCard;