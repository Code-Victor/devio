import React from "react";
import { Button } from ".";

function Cta() {
  return (
    <div className="text-center md:p-24 p-4 relative ">
      <img
        src="/imgs/cta.png"
        alt="hero-pattern"
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
      />
      <div className="bg-primary/80 absolute top-0 left-0 w-full h-full z-0 "></div>
      <div className="isolate">
        <p className="text-xl pb-3">Need me for a Project ?</p>
        <p className="text-3xl md:text-5xl pb-12">Get in touch</p>
        <Button as="a" href="www.text.com">
          Contact me
        </Button>
        <div className="text-center flex items-stretch gap-12 justify-center pt-12 text-base">
          <a href="www.test.com">
            <img src="/imgs/facebook.svg" alt="Facebook logo" />
          </a>
          <a href="www.test.com">
            <img src="/imgs/linkedin.svg" alt="Linkedin logo" />
          </a>
          <a href="www.test.com">
            <img src="/imgs/github2.svg" alt="Github logo" />
          </a>
          <a href="www.test.com">
            <img src="/imgs/instagram.svg" alt="Insatgram logo" />
          </a>
          <a href="www.test.com">
            <img src="/imgs/twitter.svg" alt="Twitter logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cta;
