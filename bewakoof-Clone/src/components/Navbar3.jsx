import React from "react";
import { Box, Flex, Link, useBreakpointValue } from "@chakra-ui/react";

const fontFamily = `'Proxima Nova', sans-serif`;

export const NavbarBottom = () => {
  const navItems = [
    "SALE",
    "MEN",
    "WOMEN",
    "WINTERWEAR",
    "ACCESSORIES",
    "SNEAKERS",
    "BEWAKOOF x GOOGLE",
    "BEWAKOOF AIR",
    "HEAVY DUTY",
    "CUSTOMIZATION",
    "OFFICIAL MERCH",
    "PLUS SIZE",
  ];

  // Adjust font size based on screen size using Chakra's `useBreakpointValue`
  const fontSize = useBreakpointValue({ base: "12px", md: "16px", lg: "18px" });
  const gapSize = useBreakpointValue({ base: "4px", md: "6px", lg: "9px" });
  const paddingSize = useBreakpointValue({
    base: "10px",
    md: "15px",
    lg: "20px",
  });

  return (
    <Box
      as="nav"
      bg="white"
      boxShadow="sm"
      p={2}
      fontFamily={fontFamily}
      mt={20}
      width="100%"
      overflowX={{ base: "scroll", md: "unset" }} // Scroll on small screens
    >
      <Flex
        justify={{ base: "flex-start", md: "center" }} // Center on medium+ screens, scrollable on smaller screens
        align="center"
        gap={gapSize}
        fontSize={fontSize}
        color="black"
        whiteSpace={{ base: "nowrap", md: "normal" }} // Prevent wrapping on smaller screens
        overflowX={{ base: "scroll", md: "unset" }} // Enable horizontal scroll for smaller screens
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            _hover={{ textDecoration: "none", color: "yellow.500" }}
            _focus={{ boxShadow: "none" }}
            _active={{ color: "yellow.600" }}
            p={paddingSize}
          >
            {item}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
