import React from 'react';
import Person from './person';
import Sean from '../../public/static/staff-sean.jpg';
import Emily from '../../public/static/staff-emily.jpg';
import Aaron from '../../public/static/staff-aaron.jpg';

const Staff = (props) => {

    const data = [
        {
            image: Sean,
            title: "Battery Arranger",
            name: "Sean Clark",
        },
        {

            image: Emily,
            title: "Front Ensemble Lead",
            name: "Emily Tran"
        },
        {
            image: Aaron,
            title: "Battery Instructor",
            name: "Aaron Kim",
        }
    ]
    return (
        <div id='staff'>
            <h1 ref={props.reference}>Staff</h1>
            <div id='staff-list'>
                {data.map((item, index) => <Person key={index} index={index} {...item} />)}
            </div>
        </div>
    );
}

export default Staff;