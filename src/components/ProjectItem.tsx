import React from "react";

function ProjectItem() {
  return (
    <div className="bg-portfolioItem flex gap-8 flex-col p-6 text-left text-sm border-t-4 border-t-indigo-500 rounded-md">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <img src="/imgs/folder.svg" alt="" />
          <img src="/imgs/github.svg" alt="" />
        </div>
        <p className="bg-gradient-to-r text-transparent from-gradientStart to-gradientEnd bg-clip-text font-bold">
          Simple-Calculator-v1
        </p>
      </div>
      <p>
        Simple Calculator created by GitHub Classroom on the new way of
        solving...
      </p>
      <div className="flex justify-between">
        <p>Javascript</p>
        <div className="flex items-center gap-2">
          <span>
            <img src="/imgs/star.svg" alt="" />
          </span>
          <span>2</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
