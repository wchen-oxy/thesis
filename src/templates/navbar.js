import React from 'react';

const Navbar = (props) => {
    return (
        <header>

            <button id='logo' onClick={() => props.scrollTo(props.welcomeRef, 1)}>Thesis</button>

            <nav>
                <button onClick={() => props.scrollTo(props.scheduleRef, -200)}>Schedule</button>
                {/* <button onClick={() => scrollTo(scheduleRef, true)}>Gallery</button> */}
                <button onClick={() => props.scrollTo(props.staffRef, -100)}>Staff</button>
                <a href='https://beacons.ai/thesisindoor'><span>Links</span></a>
                {/* <button onClick={() => props.scrollTo(props.linksRef, true)}>Links</button> */}
            </nav>
        </header>
    )

}

export default Navbar;