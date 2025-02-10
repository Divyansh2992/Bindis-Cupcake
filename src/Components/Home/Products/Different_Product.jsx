import React from 'react';
import Diff_Prod from './Diff_Prod';
import Button2 from "../../Button2/Button2.jsx";
const Different_Diff_Product = ({ title, name1, name2, name3, name4, image1, image2, image3, image4 }) => {
    return (
        <div className='container mt-5'>
            {/* Flexbox for Title & Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className='text-start'>{title}</h1>
                  <Button2>View More</Button2>
            </div>

            <div className='row text-center'>
                <div className='col-md-3 col-sm-6 col-6 mb-4'>
                    <Diff_Prod name={name1} image={image1} />
                </div>
                <div className='col-md-3 col-sm-6 col-6 mb-4'>
                    <Diff_Prod name={name2} image={image2} />
                </div>
                <div className='col-md-3 col-sm-6  col-6 mb-4'>
                    <Diff_Prod name={name3} image={image3} />
                </div>
                <div className='col-md-3 col-sm-6  col-6 mb-4'>
                    <Diff_Prod name={name4} image={image4} />
                </div>

                <div className='col-md-3 col-sm-6 col-6 mb-4'>
                    <Diff_Prod name={name4} image={image4} />
                </div>
                <div className='col-md-3 col-sm-6 col-6 mb-4'>
                    <Diff_Prod name={name4} image={image4} />
                </div>
                <div className='col-md-3 col-sm-6 col-6 mb-4'>
                    <Diff_Prod name={name4} image={image4} />
                </div>
                <div className='col-md-3 col-sm-6 col-6 mb-4'>
                    <Diff_Prod name={name4} image={image4} />
                </div>
            </div>
        </div>
    );
}

export default Different_Diff_Product;
