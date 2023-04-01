import React from "react";
// import styles from "./Button.module.css";

function Button(props) {
  return (
    <a
      href={props.url}
      className="px-6 py-2 bg-primaryColor rounded-full w-fit"
    >
      {props.text}
    </a>
  );
}

export default Button;
