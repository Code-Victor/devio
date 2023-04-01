import React from "react";
// import styles from "./Header.module.css";
import Button from "./Button";
function Header() {
  return (
    <nav className="relative container mx-auto py-6 px-24 flex items-center justify-between text-lg">
      <div className="">
        <p>Devchris</p>
      </div>
      <div className="flex space-x-12 items-center">
        <a href="www.test.com">About</a>
        <a href="www.test.com">Portfolio</a>
        <Button url="www.text.com" text="Contact me" />
      </div>
    </nav>
  );
}

export default Header;
