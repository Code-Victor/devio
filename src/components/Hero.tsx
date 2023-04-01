import React from "react";
import { Button } from ".";
// import styles from "./Hero.module.css";
import image from "../assets/imgs/hero.svg";

function Hero() {
  return (
    <div className="relative h-[calc(100vh_-_80px)] flex justify-center flex-col">
      <img
        src="/imgs/hero-bg.png"
        alt="hero-pattern"
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
      />
      <div className="container mx-auto flex items center relative justify-between py-6 px-24 items-center gap-8 pt-6 bg-primary/80 h-full">
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
    </div>
  );
}

export default Hero;
