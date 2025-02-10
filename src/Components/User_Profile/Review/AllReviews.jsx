import React from 'react';
import Review from './Review';
const AllReviews = () => {
    return (
        <div className='container mt-5'>
            <h1>Reviews</h1>
           <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
             <Review itemname="Brownie" date="2022-01-01" stars={4} review="good"/>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
            <Review itemname="Brownie" date="2022-01-01" stars={4} review="good"/>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
            <Review itemname="Brownie" date="2022-01-01" stars={4} review="good"/>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
            <Review itemname="Brownie" date="2022-01-01" stars={4} review="good"/>
            </div>
           </div>
        </div>
    );
}

export default AllReviews;
