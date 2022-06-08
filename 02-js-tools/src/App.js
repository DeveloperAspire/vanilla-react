import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// Write JavaScript here
// This below is the most basic way to write React and rendering it to the DOM
// The Pet is an example of a component
// The App is an example of the App.js in the create React app, the parent component that gets rendered to the DOM

// Props in React means Properties such as class, ids, dataset e.t.c

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Hound",
    }),
    React.createElement(Pet, {
      name: "Doc",
      animal: "Rabbit",
      breed: "Rex",
    }),
    React.createElement(Pet, {
      name: "Magrette",
      animal: "Goat",
      breed: "Mountain",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
