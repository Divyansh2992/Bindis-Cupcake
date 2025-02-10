import React from 'react';
import LeftSection from './Left_Section';
import RightSection from './Right_Section';

const CallToAction = () => {
    return (
        <div className='container mt-5 d-flex align-items-center'>
            <div className='w-100'>
                <h1 className='text-start mb-4'>Call To Action</h1>
                <div className='row'>
                    <div className='col-md-4 mb-sm-2'>
                        <LeftSection />
                    </div>
                    <div className='col-md-8'>
                        <RightSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;
