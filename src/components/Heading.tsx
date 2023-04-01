import React from "react";

function Heading(props) {
  return (
    <h1 className="text-3xl pb-12 text-center font-semibold text-primaryColor">
      {props.text}
    </h1>
  );
}

export default Heading;
