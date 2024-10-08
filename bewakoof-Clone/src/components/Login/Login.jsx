import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
  Image,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./contexts/authContext/authcontext";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
  doSignOut,
  doSignInWithEmailAndPassword,
} from "./contexts/auth";

export default function LoginSignup() {
  const { currentUser, userLoggedIn, setCurrentUser } = useAuth(); // Get current user and login state from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Email/Password login or signup
  const handleLoginSignup = async () => {
    try {
      if (email && password) {
        // Sign in with email and password
        await doSignInWithEmailAndPassword(email, password);
        alert("Logged in successfully!");
        navigate("/Product"); // Redirect to the product page
      } else {
        alert("Please enter your email and password.");
      }
    } catch (error) {
      console.error("Login error: ", error);

      // Handle specific Firebase auth errors
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password, please try again.");
      } else if (error.code === "auth/user-not-found") {
        // Optionally, create a new user if not found
        try {
          await doCreateUserWithEmailAndPassword(email, password);
          alert("Account created successfully!");
          navigate("/Product"); // Redirect to the product page
        } catch (signUpError) {
          console.error("Sign-up error: ", signUpError);
          alert("Sign-up failed. Please try again.");
        }
      } else {
        alert("Login failed. Please try again.");
      }
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await doSignInWithGoogle(); // Google login
      alert("Logged in with Google successfully!");
      navigate("/Product");
    } catch (error) {
      console.error("Google login error: ", error);
      alert("Google login failed. Please try again.");
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await doSignOut();
      setCurrentUser(null); // Clear user from context
      alert("Logged out successfully.");
      navigate("/LoginPage"); // Redirect to login page
    } catch (error) {
      console.error("Logout error: ", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <Flex
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      bg="#fafafa"
      direction={{ base: "column", md: "row" }} // Responsive direction
    >
      {/* Left Side */}
      <Box
        width={{ base: "100%", md: "50%" }}
        p={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="center"
            mb={4}
          >
            Welcome to the world of Bewakoof®!
          </Heading>
          <Center>
            <Image
              src="https://images.bewakoof.com/web/group-19-1617704502.png"
              alt="Shopping Illustration"
              width="100%"
              height="auto"
            />
          </Center>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        width={{ base: "100%", md: "50%" }}
        p={5}
        borderLeft={{ base: "none", md: "1px solid #ddd" }}
      >
        <Heading fontSize={{ base: "lg", md: "xl" }} textAlign="left" mb={4}>
          {currentUser
            ? `Welcome back, ${currentUser.email}`
            : "Log in / Sign up"}
        </Heading>
        <Text mb={4} color="gray.500">
          for Latest trends, exciting offers and everything Bewakoof®!
        </Text>

        {!currentUser ? (
          <Stack spacing={4}>
            <Input
              placeholder="Enter Email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <Input
              placeholder="Enter Password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <Button colorScheme="teal" size="lg" onClick={handleLoginSignup}>
              CONTINUE
            </Button>

            <Divider />

            <Button
              variant="outline"
              leftIcon={<FaGoogle />}
              size="lg"
              onClick={handleGoogleLogin}
            >
              Continue with Google
            </Button>
            <Button variant="outline" leftIcon={<FaFacebook />} size="lg">
              Continue with Facebook
            </Button>

            <Button size="lg" variant="outline">
              CONTINUE WITH PHONE NUMBER
            </Button>
          </Stack>
        ) : (
          <Button colorScheme="red" size="lg" onClick={handleLogout}>
            Logout
          </Button>
        )}

        <Text mt={4} fontSize="sm" color="gray.500">
          <input type="checkbox" />
          By creating an account or logging in, you agree with Bewakoof's{" "}
          <Text as="span" color="teal.500">
            Terms and Conditions
          </Text>{" "}
          and{" "}
          <Text as="span" color="teal.500">
            Privacy Policy
          </Text>
          .
        </Text>
      </Box>
    </Flex>
  );
}
