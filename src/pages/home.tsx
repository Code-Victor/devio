import React from "react";
import {
  Header,
  Hero,
  About,
  Portfolio,
  Technologies,
  Cta,
  Footer,
} from "../components";

function Homepage() {
  return (
    <div className="bg-primary text-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Technologies />
      <Cta />
      <Footer />
    </div>
  );
}

export default Homepage;
