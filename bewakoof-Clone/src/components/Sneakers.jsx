// import {
//   Box,
//   Text,
//   Image,
//   Button,
//   Flex,
//   Grid,
//   IconButton,
// } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { FaHeart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const SneakerSlider = ({ items, heading, btntext }) => {
//   let navigate = useNavigate()
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [favoriteItems, setFavoriteItems] = useState([]);

//   useEffect(() => {
//     const storedFavorites =
//       JSON.parse(localStorage.getItem("productCard")) || [];
//     setFavoriteItems(storedFavorites);
//   }, []);

//   const handleNext = () => {
//     if (currentIndex + 5 < items.length) {
//       setCurrentIndex(currentIndex + 5);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - 5 >= 0) {
//       setCurrentIndex(currentIndex - 5);
//     }
//   };

//   const handleFavoriteClick = (item) => {
//     let updatedFavorites = [...favoriteItems];

//     const isAlreadyFavorite = updatedFavorites.some(
//       (favItem) => favItem.id === item.id
//     );
//     if (isAlreadyFavorite) {
//       updatedFavorites = updatedFavorites.filter(
//         (favItem) => favItem.id !== item.id
//       );
//     } else {
//       updatedFavorites.push(item);
//     }

//     setFavoriteItems(updatedFavorites);
//     localStorage.setItem("productCard", JSON.stringify(updatedFavorites));
//   };

//   const isFavorite = (item) => {
//     return favoriteItems.some((favItem) => favItem.id === item.id);
//   };
  
//   const visibleItems = items.slice(currentIndex, currentIndex + 5);
//    console.log(visibleItems);
//   return (
//     <Box
//       h={600}
//       bgColor="white"
//       p={4}
//       backgroundImage="linear-gradient(to right bottom, rgb(232, 242, 252,0.5), rgb(232, 242, 252,0.5), rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(255,255,255,0.5))"
//       backgroundSize="cover"
//       backgroundPosition="center"
//       width="100%"
//     >
//       <Text textAlign="center" fontSize={22}>
//         {heading}
//       </Text>

//       <Box height="100%" width="100%">
//         <Grid templateColumns="repeat(5, 1fr)" gap={10}>
//           {visibleItems.map((ele) => (
//             <Box
//               key={ele.id}
//               cursor="pointer"
//               mt={30}
//               h="420px"
//               width={"265px"}
//               border="1px solid gray"
//               borderRadius={5}
//               overflow="hidden"
//               transformOrigin="center"
//             >
//               <Image
//                 _hover={{ opacity: 0.6 }}
//                 src={ele.img}
//                 alt={ele.title}
//                 w="100%"
//                 h="auto"
//                 onClick={(id) => {
//                   localStorage.setItem("Product", JSON.stringify(ele));
//                   navigate(`/product/${ele.id}`);
//                 }}
//               />
//               <Flex justifyContent="space-between" alignItems="center">
//                 <Text pt={2} fontSize="13px" fontWeight="600" ml={1}>
//                   {ele.title}
//                 </Text>
//                 <IconButton
//                   icon={<FaHeart color={isFavorite(ele) ? "red" : "gray"} />}
//                   aria-label="Wishlist"
//                   variant="ghost"
//                   color="gray.500"
//                   fontSize="18px"
//                   onClick={() => handleFavoriteClick(ele)} // Add to favorite functionality
//                 />
//               </Flex>
//               <Text fontSize="12px" color="gray.500" ml={1}>
//                 {ele.description}
//               </Text>
//               <Flex justifyContent="space-between" alignItems="center" m={1}>
//                 <Text fontSize="lg" fontWeight="bold" color="green.500">
//                   ₹{ele.price}
//                 </Text>
//                 <Text fontSize="sm" color="gray.500" m={1}>
//                   {ele.discount}% OFF
//                 </Text>
//                 <Box display="none">
//                   <Text>Original Price: ₹{ele.originalPrice}</Text>
//                   <Text>Available Sizes: {ele.sizes}</Text>
//                   <Text>Available Size: {ele.availableSize}</Text>
//                   <Text>Quantity Left: {ele.quantityLeft}</Text>
//                   <Text>Image Path: {ele.image}</Text>
//                 </Box>
//               </Flex>
//             </Box>
//           ))}
//         </Grid>
//         <Button
//           position="relative"
//           left="-1.5%"
//           top="-45%"
//           onClick={handlePrev}
//           bgColor=" rgb(250,250,250, 0.3)"
//           boxShadow="lg"
//           rounded="full"
//           zIndex="1"
//           disabled={currentIndex === 0}
//         >
//           <FontAwesomeIcon icon={faChevronLeft} />
//         </Button>

//         <Button
//           position="relative"
//           left="96%"
//           top="-45%"
//           bgColor=" rgb(250,250,250, 0.3)"
//           onClick={handleNext}
//           boxShadow="lg"
//           rounded="full"
//           zIndex="1"
//           disabled={currentIndex + 5 >= items.length}
//         >
//           <FontAwesomeIcon icon={faChevronRight} />
//         </Button>
//         <Button
//           m={8}
//           ml="42%"
//           fontSize="18px"
//           textDecoration="underline"
//           color=" rgb(99, 160, 164)"
//           variant="link"
//         >
//           {btntext}
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default SneakerSlider;

import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Grid,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SneakerSlider = ({ items, heading, btntext }) => {
  let navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const visibleItemsCount = useBreakpointValue({ base: 1, md: 3, lg: 5 });

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("productCard")) || [];
    setFavoriteItems(storedFavorites);
  }, []);

  const handleNext = () => {
    if (currentIndex + visibleItemsCount < items.length) {
      setCurrentIndex(currentIndex + visibleItemsCount);
    }
  };

  const handlePrev = () => {
    if (currentIndex - visibleItemsCount >= 0) {
      setCurrentIndex(currentIndex - visibleItemsCount);
    }
  };

  const handleFavoriteClick = (item) => {
    let updatedFavorites = [...favoriteItems];
    const isAlreadyFavorite = updatedFavorites.some(
      (favItem) => favItem.id === item.id
    );
    if (isAlreadyFavorite) {
      updatedFavorites = updatedFavorites.filter(
        (favItem) => favItem.id !== item.id
      );
    } else {
      updatedFavorites.push(item);
    }

    setFavoriteItems(updatedFavorites);
    localStorage.setItem("productCard", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (item) => {
    return favoriteItems.some((favItem) => favItem.id === item.id);
  };

  const visibleItems = items.slice(
    currentIndex,
    currentIndex + visibleItemsCount
  );

  return (
    <Box
      h={{ base: "auto", lg: 600 }}
      bgColor="white"
      p={4}
      backgroundImage="linear-gradient(to right bottom, rgb(232, 242, 252,0.5), rgb(232, 242, 252,0.5), rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(255,255,255,0.5))"
      backgroundSize="cover"
      backgroundPosition="center"
      width="100%"
    >
      <Text textAlign="center" fontSize={{ base: 18, lg: 22 }}>
        {heading}
      </Text>

      <Box height="100%" width="100%">
        <Grid
        ml={5}
          templateColumns={{
            base: "1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={4}
        >
          {visibleItems.map((ele) => (
            <Box
              key={ele.id}
              cursor="pointer"
              mt={6}
              h={{ base: "350px", md: "400px", lg: "420px" }}
              width={{ base: "100%", md: "280px", lg: "265px" }}
              border="1px solid gray"
              borderRadius={5}
              overflow="hidden"
              transition="transform 0.5s"
            >
              <Image
                _hover={{ opacity: 0.6 }}
                src={ele.img}
                alt={ele.title}
                w="100%"
                h="auto"
                onClick={() => {
                  localStorage.setItem("Product", JSON.stringify(ele));
                  navigate(`/product/${ele.id}`);
                }}
              />
              <Flex justifyContent="space-between" alignItems="center">
                <Text
                  pt={2}
                  fontSize={{ base: "12px", lg: "13px" }}
                  fontWeight="600"
                  ml={1}
                >
                  {ele.title}
                </Text>
                <IconButton
                  icon={<FaHeart color={isFavorite(ele) ? "red" : "gray"} />}
                  aria-label="Wishlist"
                  variant="ghost"
                  fontSize="18px"
                  onClick={() => handleFavoriteClick(ele)}
                />
              </Flex>
              <Text fontSize="12px" color="gray.500" ml={1}>
                {ele.description}
              </Text>
              <Flex justifyContent="space-between" alignItems="center" m={1}>
                <Text fontSize="lg" fontWeight="bold" color="green.500">
                  ₹{ele.price}
                </Text>
                <Text fontSize="sm" color="gray.500" m={1}>
                  {ele.discount}% OFF
                </Text>
              </Flex>
            </Box>
          ))}
        </Grid>

        <Button
          position="relative"
          left={{ base: "2%", lg: "-1.5%" }}
          top={-250}
          onClick={handlePrev}
          bgColor=" rgba(250, 250, 250, 0.3)"
          boxShadow="lg"
          rounded="full"
          zIndex="1"
          disabled={currentIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>

        <Button
          position="relative"
          right={{ base: "2%", lg: "-95%" }}
          top={-250}
          onClick={handleNext}
          bgColor=" rgba(250, 250, 250, 0.3)"
          boxShadow="lg"
          rounded="full"
          zIndex="1"
          disabled={currentIndex + visibleItemsCount >= items.length}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>

        <Button
          m={8}
          ml="auto"
          mr="auto"
          display="block"
          fontSize="18px"
          textDecoration="underline"
          color=" rgb(99, 160, 164)"
          variant="link"
          onClick={()=>navigate("/Product")}
        >
          {btntext}
        </Button>
      </Box>
    </Box>
  );
};

export default SneakerSlider;
