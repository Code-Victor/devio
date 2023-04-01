import React from "react";
import { Heading } from ".";

function Technologies() {
  const technologies = [
    "javascript",
    "python",
    "sass",
    "react",
    "python",
    "nodejs",
    "react",
    "nodejs",
    "sass",
    "javascript",
  ];
  return (
    <div className="pb-24">
      <Heading text="My Tools and technologies" />
      <div className="grid gap-12 grid-cols-3 md:grid-cols-5 px-4 pt-4 lg:px-24 md:px-6 place-items-center">
        {technologies.map((stack) => (
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={`/imgs/${stack}.svg`} alt="" />
            <p>{stack}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
