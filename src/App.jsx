import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // ? npm install react-router-dom - May be of use later
import "./App.css";

const Home = () => {
  return (
    <>
      /* Header component */
      <header>
        {" "}
        {/* //? Banner for background img */}
        <h1>Iris Arts</h1>
        <h2>""In every drawing there's a story""</h2>
      </header>
    </>
  );
};

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

const Gallery = () => {
  return (
    <>
      /* Header component */
      <header>
        {" "}
        {/* //? Banner for background img */}
        <h1>Gallery</h1>
        <h2>""In every drawing there's a story""</h2>
      </header>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route path="/about" exact component={About}>
            <About />
          </Route>
          <Route path="/contact" exact component={Contact}>
            <Contact />
          </Route>
          <Route path="/gallery" exact component={Gallery}>
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/**
 * ? Going for bootstrap layout and margin/paddings?
 * ? https://getbootstrap.com/docs/5.0/layout/overview/
 *
 * ? carousel... Bootstrap 5 carousel tis time?
 */
