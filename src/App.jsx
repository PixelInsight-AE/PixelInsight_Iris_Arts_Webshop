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
import Contact from "./components/Contact";

import "./Shop.css";
import "./App.css";
import "./About.css";
import { TypeAnimation } from "react-type-animation";

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

      {/* //! Here goes footer component which also stays the same across all tabs */}
      <Footer />
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
