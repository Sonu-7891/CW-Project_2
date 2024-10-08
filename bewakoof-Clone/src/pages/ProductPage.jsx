import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Button,
  Select,
  Divider,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MiddleNavbar } from "../components/Navbar2";
import Footer from "../components/footer/Footer";

let product = JSON.parse(localStorage.getItem("Product"));
const ProductPage = () => {
  let { id } = useParams();

  console.log(product);
  return (
    <Box mt="120px">
      <Navbar />
      <MiddleNavbar />
      <Flex ml={150} mt={-5} color="gray.500" fontSize={15} fontFamily="sans-serif" textDecoration="none">
        <Link ml={1} mr={1} textDecoration="none">
          Home
        </Link>
        /
        <Link ml={1} mr={1} textDecoration="none">
          Footwear
        </Link>
        /
        <Link ml={1} mr={1} textDecoration="none">
          Men's Footwear
        </Link>
        /
        <Link ml={1} mr={1} textDecoration="none">
          Men's Footwear
        </Link>
        /
        <Link ml={1} mr={1} textDecoration="none">
          Men's Black & Red Akatsuki Color Block High Top Sneakers
        </Link>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        p={4}
        maxW="1200px"
        mx="auto"
      >
        <VStack flex="3" align="start">
          <Image boxSize="600px" src={product.img} alt={product.name} />

          <Flex>
            <Image boxSize="100px" src={product.img} alt={product.name} />
          </Flex>
        </VStack>

        <Box flex="2" p={4} borderWidth="1px" borderRadius="md">
          <Text fontWeight="bold" fontSize="lg">
            OFFICIAL MARVEL MERCHANDISE
          </Text>
          <Text fontSize="xl" mt={2}>
            {product.name}
          </Text>
          <Text fontSize="md" color="green.500" mt={2}>
            {`₹${product.price} `}
            <Text
              as="span"
              color="gray.500"
              textDecoration="line-through"
            >{`₹${product.originalPrice}`}</Text>
            <Text
              as="span"
              color="green.500"
            >{` ${product.discount}% OFF`}</Text>
          </Text>
          <Text>inclusive of all taxes</Text>

          <Flex align="center" mt={4}>
            <Text mr={2}>SELECT SIZE</Text>
            <Select w="100px" placeholder="Select Size">
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Flex>

          <Flex mt={4}>
            <Button colorScheme="yellow" mr={2}>
              ADD TO BAG
            </Button>
            <Button variant="outline">WISHLIST</Button>
          </Flex>

          <Text color={product.quantityLeft ? "red.500" : "green.500"} mt={2}>
            {product.quantityLeft
              ? `Only ${product.quantityLeft} left`
              : "In stock"}
          </Text>

          <Divider mt={4} />

          <Box mt={4}>
            <HStack justify="space-between">
              <Text fontWeight="bold">Total MRP</Text>
              <Text>{`₹${product.originalPrice}`}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Discount</Text>
              <Text color="green.500">{`- ₹${
                product.originalPrice - product.price
              }`}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Subtotal</Text>
              <Text fontWeight="bold">{`₹${product.price}`}</Text>
            </HStack>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default ProductPage;
