import React from "react";

function Heading(props: any) {
  return (
    <h1 className="text-3xl pb-12 text-center font-semibold bg-gradient-to-r text-transparent from-gradientStart to-gradientEnd bg-clip-text">
      {props.text}
    </h1>
  );
}

export default Heading;
