import React from 'react';
import logo from '../images/resources/v2.png';
import { withPrefix } from 'gatsby';

const Navbar = (props) => {
    return (
        <header>
            <div id='nav-logo-container'>
                <img src={withPrefix(logo)} />
                <button
                    id='logo'
                    onClick={() => props.scrollTo(props.welcomeRef, 0)}>
                    Thesis
                </button>
            </div>
            <nav>
                <button onClick={() => props.scrollTo(props.scheduleRef, -200)}><span>Schedule</span></button>
                {/* <button onClick={() => scrollTo(scheduleRef, true)}>Gallery</button> */}
                <button onClick={() => props.scrollTo(props.staffRef, -100)}><span>Staff</span></button>
                <a href='https://beacons.ai/thesisindoor'><span>Links</span></a>
                {/* <button onClick={() => props.scrollTo(props.linksRef, true)}>Links</button> */}
            </nav>
        </header>
    )

}

export default Navbar;