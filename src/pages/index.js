import React, { useRef } from "react";
import Navbar from "../templates/navbar";
import Welcome from "../templates/welcome";
import Awards from "../templates/awards";
import Schedule from "../templates/schedule";
import Staff from "../templates/staff";
import img from "../images/staff-dir";
import "../styles/index.scss";
import Footer from "../templates/footer";
import bcp from "../images/resources/group.jpg";
import yell from "../images/resources/yell-crop.png";
import drum from "../images/resources/drum.png";

const design = [
  {
    image: img.Trent,
    title: "FE Composer",
    name: "Trent Groneworld",
  },
  {
    image: img.Sean,
    title: "Battery Arranger",
    name: "Sean Clark",
  },
  {
    image: img.KK,
    title: "Program Coordinator",
    name: "KK Rasmussen",
  },
  {
    image: img.Bailey,
    title: "Choreographer",
    name: "Bailey Yang",
  },
  {
    image: img.Chris,
    title: "Visual Consultant",
    name: "Jaime Holly",
  },
  {
    image: img.Zak,
    title: "Visual Consultant",
    name: "Zak Stillwell",
  },
];

const front = [
  {
    image: img.Gabe,
    title: "Sound Lead",
    name: "Gabe Boquiren",
  },
  {
    image: img.Ahmad,
    title: "Front Ensemble Instructor",
    name: "Ahmad Yousefi",
  },
  {
    image: img.ChrisSwan,
    title: "Front Ensemble Instructor",
    name: "Chris Swan",
  },
  {
    image: img.Matt,
    title: "Visual Lead",
    name: "Matt Costales",
  },
  {
    image: img.Brianna,
    title: "Visual Instructor",
    name: "Brianna Gier",
  },
  {
    image: img.Charlotte,
    title: "Visual Instructor",
    name: "Charlotte Alegado",
  },
  {
    image: img.Joy,
    title: "Visual Instructor",
    name: "Joy Duarte",
  },
];

const battery = [
  {
    image: img.Brandon,
    title: "Battery Instructor",
    name: "Brandon Adamson",
  },
  {
    image: img.Nick,
    title: "Battery Instructor",
    name: "Nick Cordoni",
  },
  {
    image: img.Bryan,
    title: "Battery Instructor",
    name: "Bryan Criswell",
  },
  {
    image: img.Joy,
    title: "Battery Instructor",
    name: "Joy Duarte",
  },
  {
    image: img.Kevin,
    title: "Battery Instructor",
    name: "Kevin Garrett",
  },
];

const IndexPage = () => {
  const scheduleRef = useRef(null);
  const staffRef = useRef(null);
  const linksRef = useRef(null);
  const welcomeRef = useRef(null);

  const scrollTo = (reference, offset) => {
    console.log(reference, offset);
    const elementPosition = reference.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <main id="main">
      <Navbar
        scheduleRef={scheduleRef}
        staffRef={staffRef}
        linksRef={linksRef}
        welcomeRef={welcomeRef}
        scrollTo={scrollTo}
      />
      <Welcome reference={welcomeRef} />
      <div></div>
      <div id="remainder">
        <div id="splash">
          <div id="we">
            <h1>We</h1>
            <img src={drum} />
          </div>
          <div id="are">
            <img src={yell} />
            <h1>Are</h1>
          </div>
          <h1>The Premier World Class Division of the Bay Area</h1>
        </div>

        <div id="bcp">
          <img src={bcp} />
          {/* <h4>Music to be played</h4> */}
        </div>

        <Awards />
        <Schedule reference={scheduleRef} />

        <h1 id="staff-title" ref={staffRef}>
          Staff
        </h1>
        <Staff title="Design" data={design} />
        <Staff title="Front" data={front} />
        <Staff title="Battery" data={battery} />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Thesis</title>;
