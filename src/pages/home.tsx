import React from "react";
import { Header, Hero, About } from "../components";

function Homepage() {
  return (
    <div className="bg-primary text-white">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default Homepage;
