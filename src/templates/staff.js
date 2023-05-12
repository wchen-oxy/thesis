import React from 'react';
import Person from './person';

const Staff = (props) => {
    return (
        <div className='staff'>
            <h2>{props.title}</h2>
            <div className='staff-list'>
                {props.data.map((item, index) => <Person key={index} index={index} {...item} />)}
            </div>
        </div>
    );
}

export default Staff;