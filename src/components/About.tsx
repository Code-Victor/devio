import React from "react";
import { Heading } from ".";

function About({ bio, username }: { bio: string; username: string }) {
  return (
    <div className="container mx-auto px-0 pb-12 mt-6">
      <Heading text="About Me" />
      <p className="text-center py-6 px-4 lg:px-24 md:px-6">{bio}</p>
      <div className="flex gap-6 py-6 px-4 lg:px-24 md:px-6 justify-evenly">

      <div className="flex-col md:flex-row flex gap-6 py-6 px-4 lg:px-24 md:px-6 justify-evenly">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-4xl bg-gradient-to-r text-transparent from-gradientStart to-gradientEnd bg-clip-text font-bold">
            750+
          </p>
          <p className="text-ash">Github Repository</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="bg-gradient-to-r text-transparent from-gradientStart to-gradientEnd bg-clip-text font-bold text-4xl">
            15+
          </p>
          <p className="text-ash">Github Commit</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="bg-gradient-to-r text-transparent from-gradientStart to-gradientEnd bg-clip-text font-bold text-4xl">
            700+
          </p>
          <p className="text-ash">Stars on GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default About;
