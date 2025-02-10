import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Diff_Prod = ({ name, image }) => {
    return (
        <div className="text-center">
            <img 
                src={image} 
                className="img-fluid rounded-circle" 
                style={{ height: "200px", width: "200px", objectFit: "cover" }}
                alt={name}
            />
            <h5 className="mt-2">{name}</h5>
        </div>
    );
}

export default Diff_Prod;
