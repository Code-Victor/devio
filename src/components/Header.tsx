import React from "react";
// import styles from "./Header.module.css";
import Button from "./Button";
function Header() {
  return (
    <nav className="relative container mx-auto h-20 px-24 flex items-center justify-between text-lg bg-secondary text-white">
      <div className="">
        <p>Devchris</p>
      </div>
      <div className="flex space-x-12 items-center">
        <a href="www.test.com">About</a>
        <a href="www.test.com">Portfolio</a>
        <Button as="a" href="www.text.com">
          Contact me
        </Button>
      </div>
    </nav>
  );
}

export default Header;
