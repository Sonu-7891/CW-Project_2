

import { useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";

const SliderImg = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); // Changes slide every 2 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  // Dynamically set visible items for different screen sizes
  const visibleItems = [
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
  ];

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)", // 1 item on smaller screens
        md: "repeat(2, 1fr)", // 2 items on medium screens
        lg: "repeat(3, 1fr)", // 3 items on larger screens
      }}
      gap={4}
      overflow="hidden"
      px={{ base: 2, md: 4 }} // Padding for the grid
    >
      {visibleItems.map((ele, i) => (
        <Box
          cursor="pointer"
          key={i}
          h={{ base: "250px", md: "400px", lg: "500px" }}
          w="100%"
          transition="transform 1.0s ease-in-out"
          _hover={{
            transform: "scale(1.05)", // Scale up on hover
          }}
          overflow="hidden"
        >
          <img
            src={ele.img}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }} 
          />
        </Box>
      ))}
    </Grid>
  );
};

export default SliderImg;
