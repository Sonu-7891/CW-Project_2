import { Box, Image, Text, Grid } from "@chakra-ui/react";

export const TrendingCategories = ({ categories,width,margin }) => {
  return (
    <Box textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        TRENDING CATEGORIES
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={6}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            cursor="pointer"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
            _hover={{ transition: "0.3s" }}
          >
            <Image
              src={category.img}
              alt={category.title}
              objectFit="cover"
              h="100%"
              width="100%"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
