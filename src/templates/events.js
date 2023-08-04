import React from "react";

const Events = (props) => {
  return (
  <div>
    <h2>
        {props.event}
    </h2>
    <h4>
        {props.description}
    </h4>
  </div>
  );
};

export default Events;
