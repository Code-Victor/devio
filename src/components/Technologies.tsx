import React from "react";
import { Heading } from ".";

export const technologies = [
  "javascript",
  "sass",
  "react",
  "python",
  "nodejs",
] as const;
export type Technologies = typeof technologies[number];
function Technologies({ tools }: { tools: Technologies[] }) {
  return (
    <div className="pb-24">
      <Heading text="My Tools and Technologies" />
      <div className="grid gap-12 max-sm:grid-cols-2 grid-cols-3 md:grid-cols-5 px-4 pt-4 lg:px-24 md:px-6 place-items-center">
        {tools.map((stack) => (
          <div
            key="stack"
            className="flex flex-col justify-center items-center gap-2"
          >
            <img src={`/imgs/${stack}.svg`} alt="" />
            <p>{stack}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
