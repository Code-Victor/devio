import React from "react";
import { Repo } from "../types";

function ProjectItem({ name, description, language, stars, link }: Repo) {
  return (
    <div className="bg-portfolioItem flex gap-8 flex-col p-6 text-left text-sm border-t-4 border-t-indigo-500 rounded-md">
      <div
        className="flex flex-col gap-4 flex-1
      "
      >
        <div className="flex gap-3">
          <img src="/imgs/folder.svg" alt="" />
          <a href={link} target="_blank">
            <img src="/imgs/github.svg" alt="" />
          </a>
        </div>
        <p className="bg-gradient-to-r text-transparent from-gradientStart to-gradientEnd bg-clip-text font-bold">
          {name}
        </p>
        <p>{description}</p>
      </div>
      <div className="flex justify-between">
        <p>{language}</p>
        <div className="flex items-center gap-2">
          <span>
            <img src="/imgs/star.svg" alt="" />
          </span>
          <span>{stars}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
