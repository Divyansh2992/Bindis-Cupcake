import React from 'react';
import Carousel from './Carousel/Carousel.jsx';
import Different_Product from './Products/Different_Product.jsx';
import Products from './Products/Products.jsx';
import CallToAction from './Call_To_Action/Call_To_Action.jsx';
import Blogs from './Blogs/Blogs.jsx';
const Home = () => {
    return (
        <>
        <Carousel/>
        <Different_Product
        title="Products"
        name1="Cupcake" 
        name2="Cupcake" 
        name3="Cupcake" 
        name4="Cupcake" 
        image1="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image2="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image3="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image4="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg">
        </Different_Product>

        <Products 
        title="Brownies"
        name1="Cupcake" 
        name2="Cupcake" 
        name3="Cupcake" 
        name4="Cupcake" 
        image1="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image2="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image3="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image4="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg">
        </Products>

        <Products 
        title="Fudge"
        name1="Cupcake" 
        name2="Cupcake" 
        name3="Cupcake" 
        name4="Cupcake" 
        image1="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image2="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image3="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image4="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        className="animate__animated animate__flipInY animate__delay-1s"
        style={{perspective: "1000px", transformStyle: "preserve-3d"}}>
        </Products>

        <Products 
        title="Icecream"
        name1="Cupcake" 
        name2="Cupcake" 
        name3="Cupcake" 
        name4="Cupcake" 
        image1="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image2="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image3="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image4="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg">
        </Products>

        <Products 
        title="Birthday Special"
        name1="Cupcake" 
        name2="Cupcake" 
        name3="Cupcake" 
        name4="Cupcake" 
        image1="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image2="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image3="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image4="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg">
        </Products>

        <Products 
        title="Wedding Special"
        name1="Cupcake" 
        name2="Cupcake" 
        name3="Cupcake" 
        name4="Cupcake" 
        image1="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image2="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image3="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg"
        image4="Images/WhatsApp Image 2025-02-04 at 14.59.29_49a895fb.jpg">
        </Products>


        <CallToAction/>
        <Blogs/>
       
        </>
    );
}

export default Home;
