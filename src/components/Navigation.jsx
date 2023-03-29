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
            src="https://i.imgur.com/AxNZLFZ.png"
            alt="logo"
          />
          <div>Gallery</div>
        </div>
      </Link>
      <Link className="nav-btn" to="/contact/">
        Contact
      </Link>
      <Link className="nav-btn" to="/shop/">
        Shop
      </Link>
    </nav>
  );
};

export default NavBar;
