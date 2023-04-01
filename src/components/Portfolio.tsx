import React from "react";
import { Heading, Projects } from ".";
import Button from "./Button";

function Portfolio() {
  return (
    <div className="container mx-auto pb-12 text-center py-6 px-24">
      <Heading text="My Portfolio" />
      <Projects />
      <Button as="a" href="www.text.com">
        View More
      </Button>
    </div>
  );
}

export default Portfolio;
