import { withPrefix } from 'gatsby';
import React from 'react';

const Person = (props) => {
    return (
        <div className='person'>
            <img src={withPrefix(props.image)} />
            <h3>{props.title}</h3>
            <h4>{props.name}</h4>
        </div>

    );
}

export default Person;