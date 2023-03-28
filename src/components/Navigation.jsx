import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
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

export default NavBar;
