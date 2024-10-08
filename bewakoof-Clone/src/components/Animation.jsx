import { useState, useEffect } from "react";
import { Image, Box, Heading } from "@chakra-ui/react";

export const Slideshow = () => {
  const slides = [
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Bwkf-x-IK-RM-Thin-Desktop-banner-strip--1--1707395643.gif",
      alt: "Los Angeles",
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Bwkf-x-IK-RM-Thin-Desktop-banner-strip--1--1707395643.gif",
      alt: "New York",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 1000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box cursor="pointer" textAlign="center" width="100%" height="150px">
      <Box width="100%" mx="auto" cursor="pointer">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.src}
            alt={slide.alt}
            display={index === currentSlide ? "block" : "none"}
            width="100%"
            height="150px"
            boxShadow="md"
          />
        ))}
      </Box>
    </Box>
  );
};

 
