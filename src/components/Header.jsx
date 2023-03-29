const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <header id="header-wrapper">
            <div id="header-logo">
              <img
                className="img-fluid"
                src="./src/assets/images/logo_transparent.png"
                alt="logo"
              />
            </div>
            <div id="header-text">
              <h2>"In every drawing there's a story"</h2>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
