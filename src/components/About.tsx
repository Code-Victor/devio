import React from "react";
import { Heading } from ".";

function About() {
  return (
    <>
      <Heading text="About Me" />
      <p className="text-center py-6 px-24">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic
        voluptas alias laborum ad et necessitatibus, labore natus assumenda at
        obcaecati explicabo commodi maiores debitis sit. Inventore soluta animi
        aperiam sunt veniam necessitatibus, provident voluptatum eveniet, unde
        sapiente perspiciatis eos? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Suscipit quasi praesentium, rerum error esse quo
        quaerat iusto perferendis. Minus maxime est, eveniet veniam tenetur quia
        adipisci voluptates expedita ullam praesentium asperiores impedit
        blanditiis a! Corrupti totam laboriosam excepturi molestiae deserunt!
      </p>
      <div className="flex gap-6 py-6 px-24 justify-evenly">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-primaryColor text-3xl">2000</p>
          <p>Commit Message</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-primaryColor text-3xl">2000</p>
          <p>Commit Message</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-primaryColor text-3xl">2000</p>
          <p>Commit Message</p>
        </div>
      </div>
    </>
  );
}

export default About;
