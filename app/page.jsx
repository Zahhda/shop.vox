'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import Banner from "@/components/Banner";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-2">
        <HeaderSlider />
        <FeaturedProduct />
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Home;
