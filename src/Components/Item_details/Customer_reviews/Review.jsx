import React from "react";
import Star from "./Star";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const Review = ({ Username,date,stars,review,ThumbsUp, ThumbsDown }) => {
  return (
    <div className="container text-start mt-5">
      <div className="row">
        {/* User Review Section */}
        <div className="col-12">
          <h3 style={{fontSize:"16px"}}>{Username}</h3>
          <p>{date}</p>
          <p>
            <Star stars={stars} />
          </p>
          <p style={{ fontSize: "16px" }}> 
           {review}
          </p>
        </div>

        {/* Like/Dislike Section */}
        <div className="col-sm-6 col-6 align-items-center">
          <FaRegThumbsUp className="icon me-2" size={30}/>
          <span className="fs-4 px-2">{ThumbsUp}</span>
        </div>

        <div className="col-sm-6 col-6 text-start">
          <FaRegThumbsDown className="icon"  size={30}/>
          <span className="fs-4 px-4">{ThumbsDown}</span>
        </div>
        
      </div>
    </div>
  );
};

export default Review;
