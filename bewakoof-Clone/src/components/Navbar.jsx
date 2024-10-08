
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavLink = ({ children, icon }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    href={`#${children}`}
    display="flex"
    alignItems="center"
  >
    {icon && <DownloadIcon mr={1} />}
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgColor="#eeeeee"
      px={4}
      position="fixed"
      top={0}
      fontSize={8}
      width="100%"
      zIndex={1}
    >
      <Flex h={8} alignItems={"center"} justifyContent={"space-between"}>
        {/* Hamburger menu icon for mobile */}
        <IconButton
          size={"sm"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Left side nav links (visible on desktop) */}
        <HStack spacing={8} alignItems={"center"}>
          <HStack
            as={"nav"}
            spacing={4}
            ml={150}
            display={{ base: "none", md: "flex" }}
            fontSize={{ base: "8px", lg: "10px" }} // Font size adjusts based on screen size
          >
            <NavLink>{"Offers"}</NavLink>
            <NavLink>{"Fanbook"}</NavLink>
            <NavLink icon={<DownloadIcon />}>
              {"Download App"}
            </NavLink>
            <NavLink>{"TriBe"}</NavLink>
            <NavLink>{"Membership"}</NavLink>
            <NavLink>{"Find a store near me"}</NavLink>
          </HStack>
        </HStack>

        {/* Right side nav links (visible on desktop) */}
        <HStack
          as={"nav"}
          spacing={4}
          fontSize={{ base: "8px", lg: "10px" }}
          display={{ base: "none", md: "flex" }}
          mr={{ base: "10px", md: "150px" }} // Margin adjusts on screen sizes
        >
          <NavLink>{"Contact Us"}</NavLink>
          <NavLink>{"Track Order"}</NavLink>
        </HStack>
      </Flex>

      {/* Mobile menu for small screens */}
      {isOpen ? (
        <Box pb={2} display={{ md: "none" }}>
          <VStack as={"nav"} spacing={4}>
            <NavLink>{"Offers"}</NavLink>
            <NavLink>{"Fanbook"}</NavLink>
            <NavLink icon={<DownloadIcon />}>
              {"Download App"}
            </NavLink>
            <NavLink>{"TriBe"}</NavLink>
            <NavLink>{"Membership"}</NavLink>
            <NavLink>{"Find a store near me"}</NavLink>
            <NavLink>{"Contact Us"}</NavLink>
            <NavLink>{"Track Order"}</NavLink>
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
};

