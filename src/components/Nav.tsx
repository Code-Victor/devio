import React from "react";
import Button from "./Button";
import { useAuth } from "../hooks";
import { Link } from "react-router-dom";

function Nav() {
  const { user, logOut } = useAuth();
  return (
    <nav className="bg-[#161B22] ">
      <div className="container px-4 mx-auto h-20 flex justify-between items-center">
        <a href="https://christopheralade.wixsite.com/devio"><img src="./Devio.svg" /></a>
        

        {user ? (
          <Button
            onClick={() => {
              console.log("clicked");
              logOut();
            }}
          >
            Log Out
          </Button>
        ) : (
          <div className="gap-4 flex">
            <Button variant="outline">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button>Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
