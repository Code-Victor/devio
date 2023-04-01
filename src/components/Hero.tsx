import React from "react";
import { Button } from ".";
// import styles from "./Hero.module.css";
import image from "../assets/imgs/hero.svg";

function Hero() {
  return (
    <div className="container mx-auto flex items center justify-between py-6 px-24 items-center gap-8 mt-6">
      <div className="flex flex-col gap-4 max-w-xl">
        <p>Hello, I'm</p>
        <p className="text-4xl font-semibold">Christopher Alade</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          excepturi laboriosam sed pariatur, voluptatem minima consequuntur
          cupiditate odit libero rerum.
        </p>
        <Button as="a" href="www.text.com">
          Contact me
        </Button>
      </div>
      <div>
        <img src={image} alt="" className="rounded-full" />
      </div>
    </div>
  );
}

export default Hero;
