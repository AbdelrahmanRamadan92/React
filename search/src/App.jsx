import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes ,Route } from "react-router-dom";
import SearhPararms from "./pages/SearhPararms";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Link to="/"> Adopt Me!</Link>
    </header>
    <Routes>
    <Route path="/details/:id" element={<Details/>} />
    <Route path="/" element={<SearhPararms/>} />
    <Route path="*" element={<NotFound/>} />

    </Routes>
    </BrowserRouter>
  );
};
// get the root elemet
const container = document.getElementById("root");
// creat react root
const root = ReactDOM.createRoot(container);
// rendering to code
// root.render(App());
root.render(React.createElement(App));
