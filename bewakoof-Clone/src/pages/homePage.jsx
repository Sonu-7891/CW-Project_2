// import { Box, Flex, Text } from "@chakra-ui/react";
// import { categoriesData, slideCaps, slideImages, slideSlings, slideSneaker, slideUrbans } from "../../dummydata";
// import SliderImg from "../components/SliderImg";
// import SneakerSlider from "../components/Sneakers";
// import { useNavigate } from "react-router-dom";
// import { TrendingCategories } from "../components/Trending";
// import { Slideshow } from "../components/Animation";
// import Footer from "../components/footer/Footer";
// import { Navbar } from "../components/Navbar";
// import { MiddleNavbar } from "../components/Navbar2";
// import { NavbarBottom } from "../components/Navbar3";


// export const HomePage = () => {
//     let Navigate = useNavigate()
//   return (
//     <div>
//       <Navbar />
//       <MiddleNavbar />
//       <NavbarBottom />
//       <SliderImg items={slideImages} />
//       <SneakerSlider
//         items={slideSneaker}
//         heading={"BEWAKOOF SKEAKERS"}
//         btntext={"Explore All"}
//       />
//       <SneakerSlider
//         items={slideSlings}
//         heading={"TRENDY SLINGS"}
//         btntext={"Explore All"}
//       />
//       <Box
//         cursor="pointer"
//         height="200px"
//         width="100%"
//         onClick={<Navigate to="/product" />}
//       >
//         <img
//           src="https://images.bewakoof.com/uploads/grid/app/Batman-Thin-Banner-Desktop-1726811381.jpg"
//           alt=""
//           width="100%"
//         />
//       </Box>
//       <SneakerSlider
//         items={slideCaps}
//         heading={"SLEEK CAPS"}
//         btntext={"Explore All"}
//       />
//       <SneakerSlider
//         items={slideUrbans}
//         heading={"URBAN SLIDERS"}
//         btntext={"Explore All"}
//       />
//       <TrendingCategories categories={categoriesData} />
//       <Slideshow />
//       <TrendingCategories categories={categoriesData} />
//       <Box width="100/%" cursor="pointer">
//         <Text textAlign="center" fontSize={22}>
//           TOO HOT TO BE MISSED
//         </Text>
//         <Flex justifyContent="space-between">
//           <Box cursor="pointer">
//             <img
//               src="https://images.bewakoof.com/uploads/grid/app/Official-Merch-Store-Desktop-midsize-banner-1713792662.jpg"
//               alt=""
//             />
//           </Box>
//           <Box cursor="pointer">
//             <img
//               src="https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-Midsize-banner-1715764664.jpg"
//               alt=""
//             />
//           </Box>
//         </Flex>
//       </Box>
//       <Box
//         mt={5}
//         cursor="pointer"
//         height="200px"
//         width="100%"
//         onClick={<Navigate to="/product" />}
//       >
//         <img
//           src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
//           alt=""
//           width="100%"
//         />
//       </Box>
//       <Box
//         mt={-25}
//         height="150px"
//         cursor="pointer"
//         width="100%"
//         onClick={<Navigate to="/product" />}
//       >
//         <img
//           src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
//           alt=""
//           width="100%"
//         />
//       </Box>

//       <Footer />
//     </div>
//   );
// }
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  categoriesData,
  slideCaps,
  slideImages,
  slideSlings,
  slideSneaker,
  slideUrbans,
} from "../../dummydata";
import SliderImg from "../components/SliderImg";
import SneakerSlider from "../components/Sneakers";
import { useNavigate } from "react-router-dom";
import { TrendingCategories } from "../components/Trending";
import { Slideshow } from "../components/Animation";
import Footer from "../components/footer/Footer";
import { Navbar } from "../components/Navbar";
import { MiddleNavbar } from "../components/Navbar2";
import { NavbarBottom } from "../components/Navbar3";

export const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <MiddleNavbar />
      <NavbarBottom />

      <SliderImg items={slideImages} />

      <SneakerSlider
        items={slideSneaker}
        heading={"BEWAKOOF SNEAKERS"}
        btntext={"Explore All"}
      />

      <SneakerSlider
        items={slideSlings}
        heading={"TRENDY SLINGS"}
        btntext={"Explore All"}
      />
      <Box
        cursor="pointer"
        height={{ base: "150px", md: "200px", lg: "200px" }}
        width="100%"
        onClick={() => navigate("/product")}
      >
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Batman-Thin-Banner-Desktop-1726811381.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </Box>

      <SneakerSlider
        items={slideCaps}
        heading={"SLEEK CAPS"}
        btntext={"Explore All"}
      />

      <SneakerSlider
        items={slideUrbans}
        heading={"URBAN SLIDERS"}
        btntext={"Explore All"}
      />
      <TrendingCategories categories={categoriesData} />

      <Slideshow />

      <Box width="100%" cursor="pointer">
        <Text textAlign="center" fontSize={{ base: "18px", md: "22px" }} mb={4}>
          TOO HOT TO BE MISSED
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            mb={{ base: 4, md: 0 }}
            cursor="pointer"
            width={{ base: "100%", md: "48%" }}
          >
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Official-Merch-Store-Desktop-midsize-banner-1713792662.jpg"
              alt="Official Merch"
              width="100%"
              height="auto"
            />
          </Box>
          <Box cursor="pointer" width={{ base: "100%", md: "48%" }}>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-Midsize-banner-1715764664.jpg"
              alt="Customise"
              width="100%"
              height="auto"
            />
          </Box>
        </Flex>
      </Box>

      <Box
        mt={5}
        cursor="pointer"
        height={{ base: "150px", md: "200px" }}
        width="100%"
        onClick={() => navigate("/product")}
      >
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </Box>

      <Box
        mt={{ base: -10, md: -25 }}
        height={{ base: "120px", md: "150px" }}
        cursor="pointer"
        width="100%"
        onClick={() => navigate("/product")}
      >
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </Box>

      {/* Footer */}
      <Footer />
    </div>
  );
};

 
