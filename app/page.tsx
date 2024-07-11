import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Slick from "./SlickScroll";
import HeroTwo from "./HeroTwo";
import Cards from "./Cards";
import HeroThree from "./HeroThree";
import CardMan from "./CardMan";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Slick />
      <HeroTwo />
      <Cards />
      <HeroThree />
      <CardMan />
    </div>
  );
};

export default page;
