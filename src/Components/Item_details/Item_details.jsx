import React from 'react';
import ProductDesc from './Product_desc/Product_desc';
import ProductDetails from './Product_details/Product_details';
import Customer_reviews from './Customer_reviews/Customer_reviews';
const ItemDetails = () => {
    return (
      <>
      <ProductDesc/>
      <ProductDetails/>
      <Customer_reviews/>
      </>
    );
}

export default ItemDetails;
