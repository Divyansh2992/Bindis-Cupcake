import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Prod = ({ name, image }) => {
    return (
        <div className="text-center">
            <img 
                src={image} 
                className="img-fluid rounded-3" 
                style={{ height: "200px", width: "200px", objectFit: "cover" }}
                alt={name}
            />
            <h5 className="mt-2">{name}</h5>
        </div>
    );
}

export default Prod;
