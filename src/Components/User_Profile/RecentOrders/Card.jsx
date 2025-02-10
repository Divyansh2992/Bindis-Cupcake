import React from 'react';

const Card = ({image,date,price}) => {
    return (
       <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <div className="card bg-grey rounded-4" style={{ width: "250px", height: "350px" }}>
             <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                     <h4>{date}</h4>
                 <p><i>{price}</i></p>
            </div>
        </div>
                </div>
            </div>
       </div>
    );
}

export default Card;
