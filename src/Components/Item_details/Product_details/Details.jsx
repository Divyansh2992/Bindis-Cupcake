import React from 'react';
import './Product_details.css';
const Details = ({weight,dimension,ingredients,allergens}) => {
    return (
        <div className='container text-start'>
            <h1 style={{fontSize:"18px"}} >Product Details</h1>
            <hr/>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <h3 className='parameters'>Weight</h3>
                    <p  style={{fontSize:"14px"}}>{weight}</p>
                </div>
                <div className='col-md-6  col-sm-12'>
                <h3 className='parameters'>Dimensions</h3>
                <p  style={{fontSize:"14px"}}>{dimension}</p>
                </div>
                <hr className='mt-2'/>
            </div>

            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <h3 className='parameters'>Ingredients</h3>
                    <p  style={{fontSize:"14px"}}>{ingredients}</p>
                </div>
                <div className='col-md-6  col-sm-12'>
                <h3 className='parameters'>Allergens</h3>
                <p  style={{fontSize:"14px"}}>{allergens}</p>
                </div>
                <hr className='mt-2'/>
            </div>

        </div>
    );
}

export default Details;
