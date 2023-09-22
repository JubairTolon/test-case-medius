import React from 'react';

const ModalC = ({ modalCData }) => {
    return (
        <div className='border border-secondary-subtle w-75 border-2 rounded p-4 position-absolute bg-dark overflow-auto'>
            <h1>{modalCData?.phone}</h1>
        </div>
    );
};

export default ModalC;