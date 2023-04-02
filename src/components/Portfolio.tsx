import React from "react";
import { Heading, Projects } from ".";
import { Repo } from "../types";
import Button from "./Button";
import ProjectItem from "./ProjectItem";

function Portfolio({ repos }: { repos: Repo[] }) {
  return (
    <div className="container mx-auto pb-12 text-center py-6 px-24">
      <Heading text="My Portfolio" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center xl:grid-cols-4  pb-12 gap-4">
        {repos.slice(0, 6).map((repo) => (
          <ProjectItem key={repo.name} {...repo} />
        ))}
      </div>
      <Button as="a" href="www.text.com">
        View More
      </Button>
    </div>
  );
}

export default Portfolio;
