import React from 'react';
import './Call_To_Action.css';

const RightSection = () => {
    return (
        <div className='container rightside d-flex align-items-center custom-height'>

            <div className='row w-100 text-center'>
                <div className='col-12'>
                    <h1>Order Now From Cupcakery</h1>
                    <p>Order now from Cupcakery and get the best deals on delicious cupcakes, cakes</p>
                </div>
                <div className='col-8 mx-auto'>
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" placeholder="Enter your email" />
                    </div>
                </div>
                <div className='col-12 mt-3'>
                    <button className='btn btn-lg bg-white' onClick={() => alert('Logging in...')}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
