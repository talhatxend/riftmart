import React from "react";

import BottomHeader from "../components/common/Header/BottomHeader";
import HeroSection from "../components/common/Home/HeroSection";
import PopularProducts from "../components/common/Home/PopularProducts";
import BestSellerProducts from "../components/common/Home/BestSellerProducts";

import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <Layout>
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
    </Layout>
  );
};

export default Home;
