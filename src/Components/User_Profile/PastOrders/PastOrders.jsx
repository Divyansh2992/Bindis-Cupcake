import React from 'react';
import OrderTable from './OrderTable';

const PastOrders = () => {
    return (
        <div className='container mt-5' >
          
            <div className='row'>
                    <div className='col'>
                        <OrderTable/>
                    </div>
            </div>
        </div>
    );
}

export default PastOrders;
