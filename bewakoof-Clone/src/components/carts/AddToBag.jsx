import {  useNavigate } from "react-router-dom"
import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  Heading,
  Select,
} from "@chakra-ui/react";


const AddToBag = () => {
    let Navigate = useNavigate()
    let items = JSON.parse(localStorage.getItem("productCard")) || [];
    let handleClick = () => {
      Navigate("/");
    };
    if(items===""){
         return (
           <Box>
             <Image src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" />
             <Text>Nothing in the bag</Text>
             <Button onClick={handleClick}>Continue Shopping</Button>
             <Flex>
               <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
               <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
               <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
               <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
               <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
               <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
               <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
             </Flex>
           </Box>
         );
    }else{
    return (
      <Box width="80%" margin="auto">
        <Heading  m={10} fontSize={20}> My Bag {items.length} item</Heading>
        {items.map((ele) => (
          <Box
            key={ele.id}
            borderRadius={10}
            border="1px solid lightgray"
            p={5}
            h={250}
            w={600}
            m={8}
          >
            <Flex justifyContent="space-between">
              <Box>
                <Text color="gray.500">{ele.description}</Text>
                <Heading fontWeight="bold">₹{ele.price}</Heading>
                <Text color="green.400" fontWeight="bold">
                  You Saved ₹{ele.price / 2}!
                </Text>
                <Flex width={50}>
                  Qty:
                  <Select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Select>
                </Flex>
              </Box>
              <Box>
                <Image borderRadius={10} src={ele.img} h={130} w={100} />
              </Box>
            </Flex>
            <Flex borderTop="1px solid lightgray" color="gray.300" mt={10}>
              <Button bgColor="white" m={2} width="200px">
                Remove
              </Button>
              <Button
                bgColor="white"
                m={2}
                borderRadius="none"
                borderLeft="1px solid lightgray"
                width="200px"
              >
                Move To Favrite
              </Button>
            </Flex>
          </Box>
        ))}
      </Box>
    );
    }
}

export default AddToBag
