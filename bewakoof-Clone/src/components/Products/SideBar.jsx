import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const filterOptions = {
  Category: ["Sneakers", "Sliders", "Casual Shoes"],
  Sizes: ["Small", "Medium", "Large"],
  Brand: ["Bewakoof", "Nike", "Adidas"],
  Color: ["Black", "White", "Red"],
  
};

const Sidebar = ({ filters, onApplyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);

  const handleCheckboxChange = (filterCategory, value) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[filterCategory].includes(value)) {
        newFilters[filterCategory] = newFilters[filterCategory].filter(
          (item) => item !== value
        );
      } else {
        newFilters[filterCategory].push(value);
      }
      return newFilters;
    });
  };

  return (
    <Box
      width={{ base: "full", md: "350px" }}
      p={4}
      mt={100}
      h="100vh"
    
      
      borderRight="1px solid #e0e0e0"
    >
      <Heading as="h3" size="md" mb={4}>
        Filters
      </Heading>
      <Accordion allowToggle p={5}>
        {Object.keys(filterOptions).map((filterCategory) => (
          <AccordionItem key={filterCategory}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {filterCategory}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={5}>
              <VStack align="start">
                {filterOptions[filterCategory].map((item) => (
                  <Checkbox
                    key={item}
                    isChecked={selectedFilters[filterCategory].includes(item)}
                    onChange={() => handleCheckboxChange(filterCategory, item)}
                  >
                    {item}
                  </Checkbox>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        colorScheme="yellow"
        w="full"
        mt={4}
        onClick={() => onApplyFilters(selectedFilters)}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default Sidebar;
