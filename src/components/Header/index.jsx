import React from 'react';


export const HeaderB = ()=> {
    return (
        <>
            <div className='header inset-x-0 h-16 flex flex-col justify-center relative top-20 items-center text-center mb-24'>
                <header className='text-white flex flex-col gap-1 text-center'>
                    <h1 className='font-sans text-3xl mb-2'>1929</h1>
                    <div className="rectangle inline-block w-24 h-px bg-white opacity-50" />
                    <span className='text-white opacity-75  font-sans top-7 '>Moulay Mamoun</span>
                </header>
            </div>
        </>
    );
}
