import React, { useRef } from "react"
import Navbar from "../templates/navbar"
import Welcome from "../templates/welcome";
import Awards from "../templates/awards";
import Schedule from "../templates/schedule";
import Staff from "../templates/staff";
import img from '../images/staff-dir';
import '../styles/index.scss';
const design = [
  {
    image: img.Trent,
    title: "FE Composer",
    name: "Trent Groneworld"
  },
  {
    image: img.Sean,
    title: "Battery Arranger",
    name: "Sean Clark",
  },
  {
    image: img.KK,
    title: 'Program Coordinator',
    name: 'KK Rasmussen'
  },
  {
    image: img.Bailey,
    title: 'Choreographer',
    name: 'Bailey Yang',
  },
  {
    image: img.Chris,
    title: 'Visual Consultant',
    name: 'Jaime Holly',
  },
  {
    image: img.Zak,
    title: 'Visual Consultant',
    name: 'Zak Stillwell',
  },
];


const front = [
  {

    image: img.Emily,
    title: "Front Ensemble Lead",
    name: "Emily Tran"
  },
  {

    image: img.Gabe,
    title: "Sound Lead",
    name: "Gabe Boquiren"
  },
  {

    image: img.Ahmad,
    title: "Front Ensemble Instructor",
    name: "Ahmad Yousefi"
  },
  {

    image: img.ChrisSwan,
    title: "Front Ensemble Instructor",
    name: "Chris Swan"
  },
  {

    image: img.Matt,
    title: "Visual Lead",
    name: "Matt Costales"
  },
  {

    image: img.Brianna,
    title: "Visual Instructor",
    name: "Brianna Gier"
  },
  {

    image: img.Charlotte,
    title: "Visual Instructor",
    name: "Charlotte Alegado"
  },
  {

    image: img.Joy,
    title: "Visual Instructor",
    name: "Joy Duarte"
  },
];

const battery = [

  {

    image: img.Brandon,
    title: "Battery Instructor",
    name: "BRandon Adamson"
  },
  {

    image: img.Nick,
    title: "Battery Instructor",
    name: "Nick Cordoni"
  },
  {

    image: img.Bryan,
    title: "Battery Instructor",
    name: "Bryan Criswell"
  },
  {

    image: img.Joy,
    title: "Battery Instructor",
    name: "Joy Duarte"
  },
  {

    image: img.Kevin,
    title: "Battery Instructor",
    name: "Kevin Garrett"
  },
  {
    image: img.Aaron,
    title: "Battery Instructor",
    name: "Aaron Kim",
  },
];

const IndexPage = () => {

  const scheduleRef = useRef(null);
  const staffRef = useRef(null);
  const linksRef = useRef(null);
  const welcomeRef = useRef(null);

  const scrollTo = (reference, offset) => {
    const elementPosition = reference.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  return (
    <main id='main'>
      <Navbar
        scheduleRef={scheduleRef}
        staffRef={staffRef}
        linksRef={linksRef}
        welcomeRef={welcomeRef}
        scrollTo={scrollTo}
      />
      <Welcome reference={welcomeRef} />
      <Awards />
      <Schedule reference={scheduleRef} />
      <h1 id='staff-title' ref={staffRef}>Staff</h1>
      <Staff title='Design' data={design} />
      <Staff title='Front' data={front} />
      <Staff title='Battery' data={battery} />

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
