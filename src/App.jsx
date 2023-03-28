import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

// ! Home parent component
// ? header and nav in main App component i guess?
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        {/* // ! In here would go components at the col-?? level */}
        {/* // ? <Hero />  col-8.... */}
        {/* // ? <MissionStatement />  col-4..... */}
      </div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
};

// ! about component
const About = () => {
  return (
    <>
      /* Header component */
      <header>
        {" "}
        {/* //? Banner for background img */}
        <h1>About</h1>
        <h2>""In every drawing there's a story""</h2>
      </header>
    </>
  );
};

// ! contact component
const Contact = () => {
  return (
    <>
      /* Header component */
      <header>
        {" "}
        {/* //? Banner for background img */}
        <h1>Contact</h1>
        <h2>""In every drawing there's a story""</h2>
      </header>
    </>
  );
};

const NavBar = () => {
  return (
    <nav></nav>
      <Link className="nav-btn" to="/">
        Home
      </Link>
      <Link className="nav-btn" to="/about/">
        About
      </Link>
      <Link className="nav-btn" to="/contact/">
        Contact
      </Link>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <NavBar />

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
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
