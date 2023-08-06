import React from 'react';
import ncpa from '../images/resources/bwncpa-clear.png';

const Award = (props) => {
    return (
        <div className='award'>
            <img src={ncpa} />
            <h3>{props.location}</h3>
            <h4>First Place</h4>
        </div>
    );
}

export default Award;