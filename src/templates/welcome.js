import React from 'react';
import cover from '../../public/static/bw.jpg';

const Welcome = (props) => {
    return (
        <div  id='welcome'>
            <div id='welcome-text' ref={props.reference}>
                <h1>THESIS PERCUSSION</h1>
                <p>Statement To Be Made</p>
            </div>
            <div id='welcome-image-container'>
                <img alt='cover goes here' src={cover} />
            </div>

        </div>
    );
}

export default Welcome;