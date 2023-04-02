import React from "react";
import { Button } from ".";
// import styles from "./Hero.module.css";
import image from "../assets/imgs/hero.svg";

function Hero({
  name,
  bio,
  avatar_url,
}: {
  name: string;
  bio: string;
  avatar_url: string;
}) {
  return (
    <div className="relative min-h-[calc(100vh_-_80px)] flex justify-center flex-col">
      <img
        src="/imgs/hero-bg.png"
        alt="hero-pattern"
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
      />
      <div className="bg-primary/80 absolute top-0 left-0 w-full h-full z-0 "></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center relative md:justify-between py-6 px-4 lg:px-24 md:px-6  gap-8 pt-6  ">
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 max-w-xl">
          <p>Hello, I'm</p>
          <p className="text-5xl font-semibold">{name}</p>
          <p>{bio}</p>
          <Button as="a" href="www.text.com">
            Contact me
          </Button>
        </div>
        <div className="flex-1 p-2 rounded-full bg-gradient-to-br from-gradientStart to-gradientEnd">
          <img src={avatar_url} alt="" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
