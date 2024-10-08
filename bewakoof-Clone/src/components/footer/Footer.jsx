import {
  Box,
  Flex,
  Grid,
  Text,
  Link,
  Icon,
  Button,
  Input,
  Image,
  Stack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaSnapchat,
  FaApple,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="black"
      color="gray.200"
      py="10"
      fontSize={12}
      px={{ base: "4", md: "10", lg: "16" }}
    >
      <Text
        position="relative"
        left="90px"
        top={8}
        color="yellow.400"
        fontWeight="bold"
        fontSize={25}
      >
        Bewakoof®
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        padding={10}
        borderBottom="2px solid gray"
        mb="6"
      >
        <Stack spacing="1" ml={50}>
          <Text fontWeight="bold" color="yellow.400">
            CUSTOMER SERVICE
          </Text>
          <Link>Contact Us</Link>
          <Link>Track Order</Link>
          <Link>Return Order</Link>
          <Link>Cancel Order</Link>
          <Flex align="center" mt="2">
            <Icon viewBox="0 0 24 24" boxSize="6" mr="2">
              ⏳
            </Icon>
            <Text>15 Days return policy*</Text>
          </Flex>
          <Flex align="center">
            <Icon viewBox="0 0 24 24" boxSize="6" mr="2">
              💵
            </Icon>
            <Text>Cash on delivery*</Text>
          </Flex>
        </Stack>

        <Stack spacing="1">
          <Text fontWeight="bold" color="yellow.400">
            COMPANY
          </Text>
          <Link>About Us</Link>
          <Link>We're Hiring</Link>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy</Link>
          <Link>Blog</Link>
          <Stack spacing="1">
            <Text fontWeight="bold" color="yellow.400">
              DOWNLOAD THE APP
            </Text>
            <Flex>
              <Image
                src="https://images.bewakoof.com/web/app_android_v1.png"
                alt="Google Play"
                h={10}
                w={100}
              />
              <Image
                src="https://images.bewakoof.com/web/app_ios_v1.png"
                alt="App Store"
                h={10}
                w={100}
              />
            </Flex>
          </Stack>
        </Stack>

        <Stack spacing="1">
          <Text fontWeight="bold" color="yellow.400">
            CONNECT WITH US
          </Text>
          <Flex align="center">
            <Icon as={FaFacebook} boxSize="6" mr="2" />
            <Text>4.7M People Like this</Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaInstagram} boxSize="6" mr="2" />
            <Text>1M Followers</Text>
          </Flex>
          <Flex>
            <Icon as={FaTwitter} boxSize="6" mr="2" />
            <Icon as={FaPinterest} boxSize="6" mr="2" />
            <Icon as={FaSnapchat} boxSize="6" mr="2" />
            <Icon as={FaApple} boxSize="6" />
          </Flex>
          <Stack spacing="1" mt={6}>
            <Text fontWeight="bold" color="yellow.400">
              100% SECURE PAYMENT
            </Text>
            <Flex gap={2}>
              <Image
                src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
                alt="Visa"
                boxSize="30px"
              />
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TceWA-uG0XH4Ky1M-r7gNA7i1w5H770nyQ&s"
                alt="MasterCard"
                boxSize="30px"
              />
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyk1M32GSjdx_eBJu0ANJVGNu4JQrGZz-njA&s"
                alt="PayPal"
                boxSize="30px"
              />
            </Flex>
          </Stack>
        </Stack>

        <Stack spacing="1">
          <Text fontWeight="bold" color="yellow.400">
            KEEP UP TO DATE
          </Text>
          <Flex width={300}>
            <Input
              placeholder="Enter Email ID"
              bg="black"
              border="none"
              borderBottom="1px solid yellow"
              color="yellow.400"
              borderRadius="none"
            />
            <Button
              paddingLeft={10}
              paddingRight={10}
              colorScheme="yellow"
              borderRadius="none"
            >
              SUBSCRIBE
            </Button>
          </Flex>
        </Stack>
      </Grid>

      <Grid pl={10} templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}>
        <Stack spacing="1" paddingTop={10} pl={10}>
          <Text fontWeight="bold">MEN'S CLOTHING</Text>
          <Link>Top Wear</Link>
          <Link>Men's New Arrivals</Link>
          <Link>Men's T-Shirts</Link>
          <Link>Men's Hoodies & Sweatshirts</Link>
          <Link>Top Wear</Link>
          <Link>Men's New Arrivals</Link>
          <Link>Men's T-Shirts</Link>
          <br />
          <Link>Men's Hoodies & Sweatshirts</Link>
          <Link>Top Wear</Link>
          <Link>Men's New Arrivals</Link>
          <Link>Men's T-Shirts</Link>
          <Link>Men's Hoodies & Sweatshirts</Link>
          <Link>Top Wear</Link>
          <Link>Men's New Arrivals</Link>
          <Link>Men's T-Shirts</Link>
          <Link>Men's Hoodies & Sweatshirts</Link>
          <br />
          <Link>Top Wear</Link>
          <Link>Men's New Arrivals</Link>
          <Link>Men's T-Shirts</Link>
          <Link>Men's Hoodies & Sweatshirts</Link>
          <Link>Top Wear</Link>
          <Link>Men's New Arrivals</Link>
          <Link>Men's T-Shirts</Link>
          <Link>Men's Hoodies & Sweatshirts</Link>
        </Stack>
        <Stack spacing="1" paddingTop={10}>
          <Text fontWeight="bold">WOMEN'S CLOTHING</Text>
          <Link>Women's Top Wear</Link>
          <Link>Women's New Arrivals</Link>
          <Link>Women's T-Shirts</Link>
          <Link>Women's Fashion Tops</Link>
          <Link>Women's Top Wear</Link>
          <Link>Women's New Arrivals</Link>
          <Link>Women's T-Shirts</Link>
          <Link>Women's Fashion Tops</Link>
          <Link>Women's Top Wear</Link>
          <Link>Women's New Arrivals</Link>
          <Link>Women's T-Shirts</Link>
          <br />
          <Link>Women's Fashion Tops</Link>
          <Link>Women's Top Wear</Link>
          <Link>Women's New Arrivals</Link>
          <Link>Women's T-Shirts</Link>
          <Link>Women's Fashion Tops</Link>
          <Link>Women's Top Wear</Link>
          <Link>Women's Top Wear</Link>
          <Link>Women's New Arrivals</Link>
          <Link>Women's T-Shirts</Link>
          <Link>Women's Fashion Tops</Link>
          <br />
          <Link>Women's Top Wear</Link>
          <Link>Women's New Arrivals</Link>
          <Link>Women's T-Shirts</Link>
          <Link>Women's Fashion Tops</Link>
          <Link>Women's New Arrivals</Link>
          <Link>Women's T-Shirts</Link>
          <Link>Women's Fashion Tops</Link>
          <Link>Women's Top Wear</Link>
          <Link>Women's New Arrivals</Link>
          <Link>Women's T-Shirts</Link>
          <Link>Women's Fashion Tops</Link>
        </Stack>
        <Stack spacing="1" paddingTop={10}>
          <Text fontWeight="bold">MOBILE COVERS</Text>
          <Link>Brands</Link>
          <Link>Apple</Link>
          <Link>Realme</Link>
          <Link>Samsung</Link>
        </Stack>
        <Stack
          spacing={0}
          paddingTop={10}
          fontSize={23}
          color="rgb(96,196,200)"
          fontWeight={800}
          fontFamily="sans-sarif"
        >
          <Link>FANBOOK</Link>
          <Link>OFFERS</Link>
          <Link>SITEMAP</Link>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Footer;
