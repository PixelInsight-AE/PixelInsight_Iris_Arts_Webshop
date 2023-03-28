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
      <Link className="nav-btn" to="/gallery/">
        <div>
          <img
            className="img-fluid logo"
            src="src/assets/images/logo_transparent.png"
            alt="logo"
          />
          <div>Gallery</div>
        </div>
      </Link>
      <Link className="nav-btn" to="/contact/">
        Contact
      </Link>
      <Link className="nav-btn" to="/">
        <i className="social-media fab fa-instagram-square fa-2x me-2"></i>
        <i className="social-media fab fa-facebook-square fa-2x"></i>
      </Link>
    </nav>
  );
};

export default NavBar;
