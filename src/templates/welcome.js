import React, { useRef, useEffect } from "react";
import body from "../images/resources/body-min-c.png";
import arm from "../images/resources/arm-c.png";
import Title from "./title";

const Welcome = (props) => {
  const armRef = useRef(null);
  const bodyRef = useRef(null);

  const move = (id) => {
    const windowY = window.pageYOffset;
    const elementPosition = armRef.current.getBoundingClientRect().top;
    const diff = 0.5 * (windowY / -10);
    const diffOffset = diff + 15;

    let armStyle = armRef.current.style;
    const stringedRotate = "rotate(" + diffOffset.toString() + "deg)";

    if (windowY < 1) {
      armStyle.transform = "rotate(15deg)";
    } else if (windowY < 300) {
      armStyle.transform = stringedRotate;
    } else {
      return;
    }
  };

  // useEffect(() =>{
  //   document.addEventListener("scroll", move);
  // }, [])

  return (
    <div>
      <div id="welcome" ref={props.reference}>
        <div id="welcome-text">
          {/* <h1>Thesis Percussion</h1> */}
          <Title text={"Thesis"} />
          <Title text={"Percussion"} />
          <p>Statement To Be Made</p>
        </div>
        <div id="background-container"></div>
        <div id="welcome-figure">
          <div className="foo loading" id="arm-container" ref={armRef}>
            <img className="welcome-image" id="arm" src={arm} />
          </div>
          <div className="loading" id="body-container" ref={bodyRef}>
            <img className="welcome-image" id="body" src={body} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
