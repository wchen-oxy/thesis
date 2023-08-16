import React from "react";
import bcp from "../images/resources/group.jpg";
import yell from "../images/resources/yell-crop.png";
import drum from "../images/resources/drum.png";
import { Fade } from "react-awesome-reveal";

const Intro = (props) => {
  const delay1 = 300;
  const delay2 = 800;
  return (
    <div>
      <div id="splash">
        <div className="spacer"> </div>
        <div className="text max">
          <Fade className="anim-text"  delay={delay1}>
            <h1 id="we-text">We</h1>
          </Fade>
          <Fade className="anim-img" delay={delay2}>
            <img id="we-img" src={drum} />
          </Fade>
        </div>
        <div className="text max">
          <Fade className="anim-img" delay={delay2}>
            <img id="are-img" src={yell} />
          </Fade>
          <Fade className="anim-text"  delay={delay1}>
            <h1 id="are-text">Are</h1>
          </Fade>
        </div>

        <div className="text min">
          <Fade className="anim-text" delay={delay1}>
            <h1 id="we-text">We</h1>
          </Fade>
          <Fade className="anim-img" delay={delay2}>
            <img id="we-img" src={drum} />
          </Fade>
        </div>
        <div className="text min">
          <Fade className="anim-text" delay={delay1}>
            <h1 id="are-text">Are</h1>
          </Fade>
          <Fade className="anim-img" delay={delay2}>
            <img id="are-img" src={yell} />
          </Fade>
        </div>
        <div className="spacer"> </div>
        <Fade cascade damping={0.5}>
          <h1>The </h1>
          <h1>Premier</h1>
          <h1>World Class</h1>
          <h1>Division of the Bay Area</h1>
        </Fade>
      </div>
      <div id="bcp">
        <img src={bcp} />
      </div>
    </div>
  );
};

export default Intro;
