import { Box ,Text} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const NotFound = () => {
    const [countdown, setCountdown] = useState(5); 
    const [redirect, setRedirect] = useState(false); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            setRedirect(true); 
        }, 5000);

        
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    
    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <Box  margin="auto" textAlign="center" paddingTop={300}>
            <Text fontSize={50}>404: Page Not Found</Text>
            <Text>You will be redirected in {countdown} seconds</Text>
        </Box>
    );
};
