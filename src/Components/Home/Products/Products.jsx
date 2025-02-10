import React from 'react';
import Prod from './Prod';
import Button2 from "../../Button2/Button2.jsx";
const Products = ({ title, name1, name2, name3, name4, image1, image2, image3, image4 }) => {
    return (
        <div className='container mt-5'>
            {/* Title & Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className='text-start'>{title}</h1>
                <div>
                    {/* <button className='btn btn-primary'>View More</button> */}
                    <Button2>View More</Button2>
                </div>
            </div>

            {/* Product Grid */}
            <div className='row text-center'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-4'>
                    <Prod name={name1} image={image1} />
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-4'>
                    <Prod name={name2} image={image2} />
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-4'>
                    <Prod name={name3} image={image3} />
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-4'>
                    <Prod name={name4} image={image4} />
                </div>
            </div>
        </div>
    );
}

export default Products;
