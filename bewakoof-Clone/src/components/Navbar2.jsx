// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Link,
//   useDisclosure,
//   Divider,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverBody,
//   Grid,
//   Img,
//   Button,
// } from "@chakra-ui/react";
// import { FiSearch, FiHeart, FiShoppingBag, FiLock } from "react-icons/fi";
// import SearchBar from "./search/SearchBar";
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { logoutUser } from "./Login/authSlice";
// import { auth } from "./Login/contexts/Firebase";
// import { onAuthStateChanged } from "firebase/auth";


// export const DropdownMenu = ({ label, content }) => (
//   <Popover trigger="hover" placement="bottom-start">
//     <PopoverTrigger>
//       <Link
//         href="#"
//         p={3}
//         _hover={{
//           textDecoration: "none",
//           borderBottom: "2px solid yellow",
//         }}
//       >
//         {label}
//       </Link>
//     </PopoverTrigger>
//     <PopoverContent p={3} boxShadow="md" minW="900px">
//       <PopoverBody>
//         <Grid templateColumns="repeat(4, 1fr)" gap={8}>
//           {content.map((section, index) => (
//             <Box key={index} overflow={scrollbars}>
//               <Text fontWeight="bold" mb={2}>
//                 {section.heading}
//               </Text>
//               {section.items.map((item, idx) => (
//                 <Text key={idx} mb={1}>
//                   {item}
//                 </Text>
//               ))}
//             </Box>
//           ))}
//         </Grid>
//       </PopoverBody>
//     </PopoverContent>
//   </Popover>
// );

// export const MiddleNavbar = () => {
//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   const [user, setUser] = useState(null); 

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleCartClick = () => {
//     if (user) {
//       navigate("/CartPage");
//     } else {
//       navigate("/LoginPage");
//     }
//   };

//   const handleBagClick = () => {
//     if (user) {
//       navigate("/Bag");
//     } else {
//       navigate("/LoginPage");
//     }
//   };

//   let handleClickToHome = () => {
//     navigate("/");
//   };

//   const menDropdown = [
//     {
//       heading: "Topwear",
//       items: [
//         "T-Shirts",
//         "Printed T-Shirts",
//         "Oversized T-Shirts",
//         "Shirts",
//         "T-shirtsClassic",
//         "Fit T-shirtsPlain",
//         "T-ShirtsHalf Sleeve",
//         "T-ShirtsPolo",
//         "T-ShirtsVestsShirtsCo-ord",
//         "SetsFull Sleeve",
//         "T-ShirtsPlus Size",
//         "TopwearCustomize",
//         "T-shirts",
//         "Sweatshirts",
//         "Hoodies",
//         "Sweatshirts & Hoodies",
//         "JacketsSweatersAll",
//       ],
//     },
//   ];

//   const womenDropdown = [
//     {
//       heading: "Topwear",
//       items: [
//         "T-Shirts",
//         "Printed T-Shirts",
//         "Boyfriend T-Shirts",
//         "Oversized T-Shirts",
//         "Classic",
//         "Fit T-Shirts",
//         "Half Sleeves T-Shirts",
//         "Plain T-Shirts",
//         "Full Sleeve T-Shirts",
//         "Fashion",
//         "TopsCo-ord",
//         "Sets",
//         "Dresses",
//         "Shirts",
//         "Plus Size Topwear",
//         "Customize T-shirts",
//         "Sweatshirts",
//         "Hoodies",
//         "Sweatshirts & Hoodies",
//         "Jackets",
//         "Sweaters",
//         "All Topwear",
//       ],
//     },
//     // Add more dropdown data...
//   ];

//   const mobileCoversDropdown = [
//     {
//       heading: "Popular Brands",
//       items: ["iPhone", "Samsung", "OnePlus"],
//     },
//     {
//       heading: "New Arrivals",
//       items: ["Latest Designs", "Customizable Covers"],
//     },
//     // Add more dropdown data...
//   ];

//   return (
//     <Box
//       bg="white"
//       borderBottom={"1px solid  lightgrey"}
//       width="100%"
//       px={4}
//       position="fixed"
//       top={8}
//     >
//       <Flex
//         h={12}
//         alignItems="center"
//         justifyContent="space-evenly"
//         ml={"40px"}
//         textDecoration={"none"}
//       >
//         <img
//           src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
//           alt=""
//           onClick={handleClickToHome}
//         />
//         <Flex gap={6}>
//           <DropdownMenu label="Men" content={menDropdown} />
//           <DropdownMenu label="Women" content={womenDropdown} />
//           <DropdownMenu label="Mobile Covers" content={mobileCoversDropdown} />
//         </Flex>
//         <Flex alignItems="center" justifyContent="space-between" px={3} py={3}>
//           <SearchBar />

//           <Flex alignItems="center" gap={4}>
//             <Box height="30px">
//               <Divider color="black" orientation="vertical" />
//             </Box>

//             {isLoggedIn ? (
//               <Button
//                 variant="link"
//                 colorScheme="red"
//                 onClick={handleLogout}
//                 fontSize="16px"
//                 fontWeight={500}
//                 href="/"
//               >
//                 Logout
//               </Button>
//             ) : (
//               <Link
//                 href="/LoginPage"
//                 fontSize="16px"
//                 color="gray.600"
//                 fontWeight={500}
//               >
//                 Login
//               </Link>
//             )}

//             <IconButton
//               icon={<FiHeart />}
//               aria-label="Wishlist"
//               variant="ghost"
//               color="gray.500"
//               fontSize="22px"
//               onClick={handleCartClick}
//             />
//             <IconButton
//               icon={<FiShoppingBag />}
//               aria-label="Cart"
//               variant="ghost"
//               color="gray.500"
//               fontSize="22px"
//               onClick={handleBagClick}
//             />
//           </Flex>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  useDisclosure,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Grid,
  Img,
  Button,
} from "@chakra-ui/react";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import SearchBar from "./search/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { logoutUser } from "./Login/authSlice";
import { auth } from "./Login/contexts/Firebase";
import { onAuthStateChanged } from "firebase/auth";

// Dropdown Menu component
export const DropdownMenu = ({ label, content }) => (
  <Popover trigger="hover" placement="bottom-start">
    <PopoverTrigger>
      <Link
        href="#"
        p={2}
        _hover={{
          textDecoration: "none",
          borderBottom: "2px solid yellow",
        }}
      >
        {label}
      </Link>
    </PopoverTrigger>
    <PopoverContent p={3} boxShadow="md" minW="300px">
      <PopoverBody>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {content.map((section, index) => (
            <Box key={index} overflowY="auto">
              <Text fontWeight="bold" mb={2}>
                {section.heading}
              </Text>
              {section.items.map((item, idx) => (
                <Text key={idx} mb={1}>
                  {item}
                </Text>
              ))}
            </Box>
          ))}
        </Grid>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export const MiddleNavbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleCartClick = () => {
    if (user) {
      navigate("/CartPage");
    } else {
      navigate("/LoginPage");
    }
  };

  const handleBagClick = () => {
    if (user) {
      navigate("/Bag");
    } else {
      navigate("/LoginPage");
    }
  };

  const handleClickToHome = () => {
    navigate("/");
  };

  // Dropdown content
  const menDropdown = [
    {
      heading: "Topwear",
      items: [
        "T-Shirts",
        "Printed T-Shirts",
        "Oversized T-Shirts",
        "Shirts",
        "Classic Fit T-shirts",
        "Half Sleeve T-Shirts",
        "Polo T-Shirts",
        "Vests",
        "Sweatshirts",
        "Hoodies",
        "Jackets",
        "Sweaters",
        "All Topwear",
      ],
    },
  ];

  const womenDropdown = [
    {
      heading: "Topwear",
      items: [
        "T-Shirts",
        "Printed T-Shirts",
        "Boyfriend T-Shirts",
        "Oversized T-Shirts",
        "Classic Fit T-Shirts",
        "Half Sleeves",
        "Plain T-Shirts",
        "Full Sleeve T-Shirts",
        "Fashion Tops",
        "Co-ord Sets",
        "Dresses",
        "Shirts",
        "Plus Size Topwear",
        "Customize T-shirts",
        "Sweatshirts",
        "Hoodies",
        "All Topwear",
      ],
    },
  ];

  const mobileCoversDropdown = [
    {
      heading: "Popular Brands",
      items: ["iPhone", "Samsung", "OnePlus"],
    },
    {
      heading: "New Arrivals",
      items: ["Latest Designs", "Customizable Covers"],
    },
  ];

  return (
    <Box
      bg="white"
      borderBottom={"1px solid lightgrey"}
      width="100%"
      px={{ base: 2, md: 4 }}
      py={2}
      position="fixed"
      top={8}
      zIndex={999}
    >
      <Flex
        h={{ base: "20px", md: "40px" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box onClick={handleClickToHome} ml={150} cursor="pointer">
          <Img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
            alt="Bewakoof Logo"
            boxSize={{ base: "120px", md: "200px" }}
          />
        </Box>

        <Flex
          display={{ base: "none", md: "flex" }}
          gap={8}
          alignItems="center"
        >
          <DropdownMenu label="Men" content={menDropdown} />
          <DropdownMenu label="Women" content={womenDropdown} />
          <DropdownMenu label="Mobile Covers" content={mobileCoversDropdown} />
        </Flex>

        <Flex alignItems="center" mr={150} gap={{ base: 2, md: 3 }}>
          <SearchBar />
          <Box height="30px">
            <Divider color="black.500" orientation="vertical" />
          </Box>
          {isLoggedIn ? (
            <Button variant="link" colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link href="/LoginPage" fontSize="16px" color="gray.600">
              Login
            </Link>
          )}
          <IconButton
            icon={<FiHeart />}
            aria-label="Wishlist"
            variant="ghost"
            color="gray.500"
            fontSize="24px"
            onClick={handleCartClick}
          />

          <IconButton
            icon={<FiShoppingBag />}
            aria-label="Cart"
            variant="ghost"
            color="gray.500"
            fontSize="24px"
            onClick={handleBagClick}
          />
        </Flex>
      </Flex>

      <Flex display={{ base: "flex", md: "none" }} gap={4} mt={4}>
        <DropdownMenu label="Men" content={menDropdown} />
        <DropdownMenu label="Women" content={womenDropdown} />
        <DropdownMenu label="Mobile Covers" content={mobileCoversDropdown} />
      </Flex>
    </Box>
  );
};
