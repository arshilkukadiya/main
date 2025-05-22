import Carousel from 'react-bootstrap/Carousel';
import react, { useState } from 'react';
import imageOne from "../assets/hero/1.png"

const carouselData = [
  {
    image: imageOne,
    title: "AI personalities that spark real connection",
    desc: "Accenture is reimagining customer and employee experiences...",
    link: "#"
  },
  {
    image: imageOne,
    title: "AI personalities that spark real connection",
    desc: "Accenture is reimagining customer and employee experiences...",
    link: "#"
  },
  {
    image: imageOne,
    title: "AI personalities that spark real connection",
    desc: "Accenture is reimagining customer and employee experiences...",
    link: "#"
  },
  {
    image: imageOne,
    title: "AI personalities that spark real connection",
    desc: "Accenture is reimagining customer and employee experiences...",
    link: "#"
  },
  {
    image: imageOne,
    title: "AI personalities that spark real connection",
    desc: "Accenture is reimagining customer and employee experiences...",
    link: "#"
  },
  {
    image: imageOne,
    title: "AI personalities that spark real connection",
    desc: "Accenture is reimagining customer and employee experiences...",
    link: "#"
  }
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-wrapper bg-black text-white d-flex align-items-center">
      <Carousel activeIndex={index} onSelect={handleSelect} controls indicators={false}>
        {carouselData.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex flex-wrap align-items-center">
              <div className="col-md-6">
                <img src={slide.image} alt={slide.title} className="img-fluid" />
              </div>
              <div className="col-md-6 p-4">
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                <a href={slide.link} className="btn btn-primary">Read more</a>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-white mt-2 text-center">
        {index + 1}/{carouselData.length}
      </div>
    </div>
  );
}

export default HomeCarousel;
