import React from "react";

// Write JavaScript here
// This below is the most basic way to write React and rendering it to the DOM
// The Pet is an example of a component


const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};


export default Pet;