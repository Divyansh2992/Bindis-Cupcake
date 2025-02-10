import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide container" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img 
          src="Images/Carousel/Carousel.svg" 
          className="d-block w-100" 
          alt="Carousel slide 2"
        />
       
      </div>
      <div className="carousel-item">
        <img 
          src="Images/Carousel/Carousel.svg" 
          className="d-block w-100" 
          alt="Carousel slide 2"
        />
        
      </div>
      <div className="carousel-item">
        <img 
          src="Images/Carousel/Carousel.svg" 
          className="d-block w-100" 
          alt="Carousel slide 3"
        />
       
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default Carousel;
