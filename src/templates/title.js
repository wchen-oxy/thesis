import React from "react";

const Title = (props) => {
  return (
    <h1 className="glitch" data-text={props.text}>
      {props.text}
    </h1>
  );
};

export default Title;
