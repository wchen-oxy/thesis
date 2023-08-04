import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Events from "./events";

const Schedule = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanitySchedule {
        nodes {
          event
          description
        }
      }
    }
  `).allSanitySchedule.nodes;
  return (
    <div id="schedule">
      <h1 ref={props.reference}>2024 Schedule</h1>
      {data.map((data, index) => (
        <Events 
            key={index} 
            event={data.event} 
            description={data.description} 
            />
      ))}
    </div>
  );
};

export default Schedule;
