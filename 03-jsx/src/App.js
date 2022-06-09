import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Adopt Me!</h1>

        <SearchParams />
      </div>
    </StrictMode>
  );
};

{
  /* <Pet name="Luna" animal="Dog" breed="Hound" />
      <Pet name="Doc" animal="Rabbit" breed="Rex" />
      <Pet name="Magrette" animal="Goat" breed="Mountain" /> */
}
// What JSX is complied to
// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Hound",
//     }),
//     React.createElement(Pet, {
//       name: "Doc",
//       animal: "Rabbit",
//       breed: "Rex",
//     }),
//     React.createElement(Pet, {
//       name: "Magrette",
//       animal: "Goat",
//       breed: "Mountain",
//     })
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
