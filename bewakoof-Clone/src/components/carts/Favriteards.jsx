import { FaHeart } from "react-icons/fa";
import {
  Box,
  Text,
  IconButton,
  Image,
  Grid,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const FavriteCards = () => {
  const [productCards, setProductCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("productCard")) || [];
    setProductCards(storedCards);
  }, []);

  const handleRemove = (id) => {
    const updatedCards = productCards.filter((card) => card.id !== id);
    setProductCards(updatedCards);
    localStorage.setItem("productCard", JSON.stringify(updatedCards));
  };

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Box m="auto" width="fit-content">
      <Box p={5} pt={10} mt={10} borderRadius="md">
        <Grid templateColumns="repeat(5, 1fr)" gap={10}>
          {productCards.map((ele) => (
            <Box
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
              />
              <Flex justifyContent="space-between" alignItems="center">
                <Text pt={2} fontSize="13px" fontWeight="600" ml={1}>
                  {ele.title}
                </Text>
                <Button
                  colorScheme="red"
                  size="sm"
                  m={1}
                  onClick={() => handleRemove(ele.id)}
                >
                  Remove
                </Button>
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
      </Box>
    </Box>
  );
};
