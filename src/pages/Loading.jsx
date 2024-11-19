import React from 'react';
import { useLocation } from 'react-router-dom';

const Loading = () => {
   
    return (
        <div className='grid place-items-center min-h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    );
};

export default Loading;