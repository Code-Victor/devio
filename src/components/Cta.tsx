import React from "react";
import { Button } from ".";

function Cta({
  twitter,
  linkedin,
  instagram,
  facebook,
  github,
}: {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  github?: string;
}) {
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
        <div className="text-center flex gap-12 justify-center pt-12">
          {facebook && (
            <a href={facebook} target="_blank">
              <img src="/imgs/facebook.svg" alt="Facebook logo" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank">
              <img src="/imgs/linkedin.svg" alt="Linkedin logo" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank">
              <img src="/imgs/github2.svg" alt="Github logo" />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank">
              <img src="/imgs/twitter.svg" alt="Twitter logo" />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank">
              <img src="/imgs/instagram.svg" alt="Insatgram logo" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cta;
