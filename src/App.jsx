import React from "react";
import {
  Advertise,
  Banner,
  Explore,
  Footer,
  Hero,
  Memory,
  Navbar,
  Newslatter,
  Pricing,
} from "./component";
import {
  bannerAPI,
  brands,
  footerAPI,
  hero,
  memory,
  navlinks,
  placesAPI,
  pricingapi,
} from "./data/travigodata";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore the Beauty of World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
