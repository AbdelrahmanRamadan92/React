// console.log('hello from App.jsx');
import React from "react";
import ReactDOM from "react-dom";

const Pets = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

// App componet -> parent

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "First Lecture"),
    React.createElement(Pets, {
      name: "Thunder",
      animal: "Dog",
      breed: "Havanees",
    }),
    React.createElement(Pets, {
      name: "Koko",
      animal: "checkhen",
      breed: "Hendi",
    }),
  ]);
};
// get the root elemet
const container = document.getElementById("root");
// creat react root
const root = ReactDOM.createRoot(container);
// rendering to code
// root.render(App());
root.render(React.createElement(App));
