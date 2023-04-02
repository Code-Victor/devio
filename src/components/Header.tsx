import React from "react";
// import styles from "./Header.module.css";
import Button from "./Button";
function Header() {
  return (
    <nav className="relative  bg-secondary text-white">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-24 md:px-6 sm:px-0 h-20 md:text-md lg:text-lg">
        <div className="">
          <p className="bg-gradient-to-r font-bold text-transparent from-gradientStart to-gradientEnd bg-clip-text">
            Devchris
          </p>
        </div>
        <div className="flex md:space-x-12 space-x-2 items-center text-sm">
          <a
            href="www.test.com"
            className="bg-gradient-to-tr text-transparent from-gradientStart to-gradientEnd bg-clip-text"
          >
            About
          </a>
          <a
            href="www.test.com"
            className="bg-gradient-to-tr text-transparent from-gradientStart to-gradientEnd bg-clip-text"
          >
            Portfolio
          </a>
          <Button as="a" href="www.text.com">
            Contact me
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
