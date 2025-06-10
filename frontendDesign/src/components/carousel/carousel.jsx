// MultiCarousel.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import card1 from '../../assets/carouselimg/card1.jpg'
import card2 from '../../assets/carouselimg/card2.jpg'
import card3 from '../../assets/carouselimg/card3.jpg'
import card4 from '../../assets/carouselimg/card4.jpg'
import card5 from '../../assets/carouselimg/card5.jpg'
import card6 from '../../assets/carouselimg/card6.jpg'




const data = [
  { img: card1 },
  { img: card2 },
  { img: card3},
  { img: card4 },
  { img: card5 },
  { img: card6 },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const MultiCarousel = () => {
  return (
    <section className="py-5">
      <h2 className="text-center text-primary mb-4">LOOK BEFORE CHOOSING</h2>
      <h3 className="text-center fw-bold mb-5">Our Le Union Interface</h3>
      <div className="container">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {data.map((item, index) => (
            <div className="p-2" key={index}>
              <img
                src={item.img}
                alt={`card-${index}`}
                className="img-fluid rounded shadow h-50"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MultiCarousel;
