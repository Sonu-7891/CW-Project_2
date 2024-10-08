import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  slideSneaker,
  slideSlings,
  slideCaps,
  slideUrbans,
} from "../../../dummydata";
import { useNavigate } from "react-router-dom";


export default function SearchBar() {
  let navigate = useNavigate()
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const allProducts = [
    ...slideSneaker,
    ...slideSlings,
    ...slideCaps,
    ...slideUrbans,
  ];

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery === "") {
      setFilteredData([]);
      return;
    }

    // Filter through unique products by checking all fields (title, description, category)
    const filteredSuggestions = allProducts.filter(
      (item) =>
        (item.Brand && item.Brand.toLowerCase().includes(searchQuery)) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery)) ||
        (item.Category && item.Category.toLowerCase().includes(searchQuery))
    );

    // Check if there are unique items and log to debug
    console.log(filteredSuggestions);

    // Remove duplicates if any exist in data (based on 'title')
    const uniqueSuggestions = filteredSuggestions.reduce((acc, current) => {
      const x = acc.find((item) => item.title === current.title);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    setFilteredData(uniqueSuggestions);
  };


  return (
    <Box width="100%" px={3} py={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <InputGroup
          w={{ base: "100%", md: "300px" }}
          bg="#eeeeee"
          borderRadius="md"
        >
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            fontSize="12px"
            placeholder="Search by product, category or collection"
            variant="filled"
            bg="#eeeeee"
            _focus={{ bg: "white", borderColor: "gray.400" }}
            value={query}
            onChange={handleSearch}
          />
        </InputGroup>
      </Flex>

      {query && filteredData.length > 0 && (
        <Box
          mt={1}
          p={1}
          bg="white"
          borderRadius="md"
          shadow="md"
          borderWidth="1px"
          borderColor="gray.200"
          zIndex={1000}
          position="absolute"
          width={{ base: "100%", md: "300px" }}
        >
          <List spacing={2}>
            {filteredData.map((item, index) => (
              <ListItem
                key={index}
                onClick={()=>navigate('/Product')}
                cursor="pointer"
                _hover={{ bg: "gray.100" }}
              >
                <Text fontSize="14px">{item.description && item.Brand && item.Category}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {query && filteredData.length === 0 && (
        <Text
          position="relative"
          top={2}
          mt={0}
          fontSize="12px"
          color="gray.500"
        >
          No results found.
        </Text>
      )}
    </Box>
  );
}
