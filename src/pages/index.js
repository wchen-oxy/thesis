import React, { useRef } from "react"
import Navbar from "../templates/navbar"
import Welcome from "../templates/welcome";
import Awards from "../templates/awards";
import Schedule from "../templates/schedule";
import Staff from "../templates/staff";
import '../styles/index.scss';


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
      <Welcome reference={welcomeRef}/>
      <Awards />
      <Schedule reference={scheduleRef} />
      <Staff reference={staffRef} />

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
