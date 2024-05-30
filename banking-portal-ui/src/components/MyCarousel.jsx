import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MyCarousel.css'; // Import CSS file for styling

const MyCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
        <div>
          <img src="https://cdn.dribbble.com/userupload/13824565/file/original-a5997cdf99e802c98528b68f0c87bdb2.jpg?crop=0x1047-1800x2397&resize=640x480&vertical=center" alt="Image 1" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/516595504/vector/internet-banking-banner.jpg?s=1024x1024&w=is&k=20&c=T1dTsnLGMNdG8Z3DP3cBEXgqpNhSxCXLklRQT6SwWmo=" alt="Image 2" />
        </div>
        <div>
          <img src="https://static.vecteezy.com/system/resources/previews/012/217/659/original/internet-banking-with-smartphone-online-transaction-3d-illustration-with-copy-space-gold-coin-money-transfer-illustration-banner-technology-background-vector.jpg" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
