import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <nav className="bg-[#161B22] ">
      <div className="container px-4 mx-auto h-20 flex justify-between items-center">
        <img src="./Devio.svg" />
        <div className="gap-4 flex">
          <Button variant="outline">Sign in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
