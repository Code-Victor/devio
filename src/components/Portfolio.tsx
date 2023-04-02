import React from "react";
import { Heading, Projects } from ".";
import Button from "./Button";

function Portfolio() {
  return (
    <div className="container mx-auto pb-12 text-center py-6 md:px-24 px-2">
      <Heading text="My Portfolio" />
      <Projects />
      <Button as="a" href="www.text.com">
        View More
      </Button>
    </div>
  );
}

export default Portfolio;
