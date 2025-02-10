import React from "react";
import Star from "./Star";

const Review = ({ itemname,date,stars,review}) => {
  return (
    <div className="container text-start mt-5">
       
      <div className="row">
        {/* User Review Section */}
        <div className="col-12">
          <h3 style={{fontSize:"16px"}}>{itemname}</h3>
          <p>{date}</p>
          <p>
            <Star stars={stars} />
          </p>
          <p style={{ fontSize: "16px" }}> 
           {review}
          </p>
        </div>

       
        
      </div>
    </div>
  );
};

export default Review;
