import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import NavBar from "./components/Navigation";
import About from "./components/About";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

import "./Shop.css";
import "./App.css";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "One", // Types 'One'
        1000, // Waits 1s
        "Two", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Two Three", // Types 'Three' without deleting 'Two'
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
};
// ! about component

// ! contact component
const Contact = () => {
  return (
    <>
      <header>
        <h1>Contact</h1>
        <h2>"In every drawing there's a story"</h2>
      </header>
    </>
  );
};

const Gallery = () => {
  return (
    <>
      <header>
        <h1>Gallery</h1>
        <h2>"In every drawing there's a story"</h2>
      </header>
    </>
  );
};

// ! App component
function App() {
  return (
    <Router>
      <Header />
      <NavBar />

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
      <Route path="/gallery/" component={Gallery} />
      <Route path="/shop/" component={Shop} />

      <Footer />
      {/* //! Here goes footer component which also stays the same across all tabs */}
    </Router>
  );
}

export default App;

/**
 * ? Going for bootstrap layout and margin/paddings?
 * ? https://getbootstrap.com/docs/5.0/layout/overview/
 *
 * ? carousel... Bootstrap 5 carousel tis time?
 *
 * ? How do we go about the bootstrap containers??? I guess they go in the parent components?....
 */
