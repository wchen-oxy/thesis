import React, { useState } from "react";
import logo from "../images/resources/v2.png";
import { withPrefix } from "gatsby";
import { slide as Menu } from "react-burger-menu";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <header>
      <div id="nav-logo-container">
        <img src={withPrefix(logo)} />
        <button id="logo" onClick={() => props.scrollTo(props.welcomeRef, 0)}>
          Thesis
        </button>
      </div>
      <nav>
        <div id="web-navigation-bar">
          <button onClick={() => props.scrollTo(props.scheduleRef, -200)}>
            <span>Schedule</span>
          </button>
          {/* <button onClick={() => scrollTo(scheduleRef, true)}>Gallery</button> */}
          <button onClick={() => props.scrollTo(props.staffRef, -100)}>
            <span>Staff</span>
          </button>
          <a href="https://beacons.ai/thesisindoor">
            <span>Links</span>
          </a>
        </div>

        {/* <button onClick={() => props.scrollTo(props.linksRef, true)}>Links</button> */}
      </nav>
      <div id="mobile-navigation-bar">
        <Menu
          right
          onOpen={() => setMenuOpen(true)}
          onClose={() => setMenuOpen(false)}
          isOpen={menuOpen}
          // onStateChange={(state) => handleMenuStateChange(state.isOpen)}
        >
          <a
            className="menu-item"
            onClick={() => props.scrollTo(props.scheduleRef, -200)}
          >
            Schedule
          </a>
          <a
            className="menu-item"
            onClick={() => props.scrollTo(props.staffRef, -100)}
          >
            Staff
          </a>
          <a className="menu-item" href="https://beacons.ai/thesisindoor">
            Links
          </a>
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;
