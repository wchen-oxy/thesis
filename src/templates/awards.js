import React from 'react';
import Award from './award';

const Awards = (props) => {

    const data = [
        {
            location: "James Logan HS",
            date: "March 18, 2023"
        },
        {
            location: "American Canyon",
            date: "Feb 11, 2023"
        },
        {
            location: "NCPA Championships Stockton Arena",
            date: "April 15, 2023"
        }
    ];

    return (
        <div id='awards'>
            <h1>Competition Results</h1>
            <div id='awards-list'>
                {data.map((item, index) => <Award key={index} index={index} {...item} />)}
            </div>
        </div>
    );
}
export default Awards;