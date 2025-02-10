import React from 'react';
import Rating from "./Rating";
import Review from './Review';

const CustomerReviews = () => {
    return (
        <>  
        <Rating  rating={4.5} totalReviews={25}  ratingsBreakdown={{
    5: 35,
    4: 30,
    3: 10,
    2: 10,
    1: 15,
  }}
/>
        <Review Username="Samantha" date="2/17/22"  stars={4.5} review="The cupcakes were delicious and the delivery was fast. I will definitely be ordering again." ThumbsUp="5"  ThumbsDown="4"/>
        <Review Username="Samantha" date="2/17/22"  stars={4.5} review="The cupcakes were delicious and the delivery was fast. I will definitely be ordering again." ThumbsUp="5"  ThumbsDown="4"/>
        </>
    );
}

export default CustomerReviews;
