import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Login/contexts/Firebase";

const CartNav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to store the authenticated user

  let handleClickToHome = () => {
    navigate("/");
  };

  // Use Firebase to track auth state and get the user's email
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // If a user is logged in, set the user state
      } else {
        setUser(null); // If no user is logged in, reset the user state
      }
    });

    return () => unsubscribe(); // Clean up the subscription when the component unmounts
  }, []);

  return (
    <Flex
      borderBottom="2px solid lightgray"
      justifyContent="space-between"
      p={2}
    >
      <Box ml={40}>
        <Image
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          onClick={handleClickToHome}
        />
      </Box>
      <Box mr={72}>
        {user ? ( // Conditionally render the user's email if they are logged in
          <>
            <Text fontSize={10} color="gray.300">
              Signed in as
            </Text>
            <Text>{user.email}</Text>
          </>
        ) : (
          <Text fontSize={10} color="gray.300">
            Not Signed In
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default CartNav;
