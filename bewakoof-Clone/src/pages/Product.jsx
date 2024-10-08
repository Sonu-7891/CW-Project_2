import React, { useState } from 'react'
import Sidebar from '../components/Products/SideBar'
import ProductGrid from '../components/Products/ProductGrid'
import { Box, Flex } from "@chakra-ui/react";
import { slideSneaker } from '../../dummydata';
import { Navbar } from '../components/Navbar';
import { MiddleNavbar } from '../components/Navbar2';
import Footer from '../components/footer/Footer';

const Product = () => {
    const [filters, setFilters] = useState({
      Category: [],
      Sizes: [],
      Brand: [],
      Color: [],
    });

    const handleApplyFilters = (newFilters) => {
      setFilters(newFilters);
    };

    const filteredProducts = slideSneaker.filter((item) => {
      return (
        (filters.Category.length === 0 ||
          filters.Category.includes(item.Category)) &&
        (filters.Sizes.length === 0 || filters.Sizes.includes(item.Sizes)) &&
        (filters.Brand.length === 0 || filters.Brand.includes(item.Brand)) &&
        (filters.Color.length === 0 || filters.Color.includes(item.Color))
      );
    });
  return (
    <Box>
      <Navbar />
      <MiddleNavbar />
      <Box p={4} width="90%" margin="auto" overflow="screenX">
        <Flex>
          <Sidebar filters={filters} onApplyFilters={handleApplyFilters} />
          <ProductGrid products={filteredProducts} />
        </Flex>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Product
