import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Heading,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const ProductGrid = ({ products }) => {
     let navigate = useNavigate();

     const [favoriteItems, setFavoriteItems] = useState([]);

     useEffect(() => {
       const storedFavorites =
         JSON.parse(localStorage.getItem("productCard")) || [];
       setFavoriteItems(storedFavorites);
     }, []);
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
  return (
    <Box
      p={4}
      flex="1"
      mt={100}
      height="100vh"
      className="scroll-container"
      overflowY="scroll"
    >
      <Heading as="h2" size="lg" mb={4}>
        Sneakers for Men ({products.length})
      </Heading>
      <Image width="96%" src="https://images.bewakoof.com/uploads/category/desktop/Batman_Desktop-Inside-Banner_(1)-1726812640.jpg" />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={3}
      >
        {products.length === 0 ? (
          <Text>No products available with selected filters</Text>
        ) : (
          products.map((ele) => (
            <GridItem
              key={ele.id}
              cursor="pointer"
              mt={30}
              h="420px"
              width={"265px"}
              border="1px solid gray"
              borderRadius={5}
              overflow="hidden"
              transformOrigin="center"
            >
              <Image
                _hover={{ opacity: 0.6 }}
                src={ele.img}
                alt={ele.title}
                w="100%"
                h="auto"
                onClick={(id) => {
                  localStorage.setItem("Product", JSON.stringify(ele));
                  navigate(`/product/${ele.id}`);
                }}
              />
              <Flex justifyContent="space-between" alignItems="center">
                <Text pt={2} fontSize="13px" fontWeight="600" ml={1}>
                  {ele.title}
                </Text>
                <IconButton
                  icon={<FaHeart color={isFavorite(ele) ? "red" : "gray"} />}
                  aria-label="Wishlist"
                  variant="ghost"
                  color="gray.500"
                  fontSize="18px"
                  onClick={() => handleFavoriteClick(ele)} // Add to favorite functionality
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
                <Box display="none">
                  <Text>Original Price: ₹{ele.originalPrice}</Text>
                  <Text>Available Sizes: {ele.sizes}</Text>
                  <Text>Available Size: {ele.availableSize}</Text>
                  <Text>Quantity Left: {ele.quantityLeft}</Text>
                  <Text>Image Path: {ele.image}</Text>
                </Box>
              </Flex>
            </GridItem>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
