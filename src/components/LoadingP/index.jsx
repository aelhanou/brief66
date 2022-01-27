import React, { useState, useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';


export const Loading = ({children}) => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])


    return (
        <>
            {loading ? (
                <div  className='flex  w-full justify-center items-center h-screen'>
                    <PropagateLoader className="" size={20} color={'white'} loading={loading} />
                </div>
            ) :
                <div>
                    {children}
                </div>

        }
        </>
    );
}


