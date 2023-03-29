const Hero = () => {
  return (
    <div id="hero-section" className="col-8">
      <h2 id="hero-text">In every drawing there's a story</h2>
      <img
        className="img-fluid"
        src="./src/assets/images/card_15.jpg"
        alt="image here"
      />
    </div>
  );
};

const Text = () => {
  return (
    <div id="over-mij" className="col-4">
      <h1>Over Mij</h1>
      <h2>Welkom! Je snuffelt rond op de website van Iris arts.</h2>
      <p>
        Ik ben een kunstenares die tekeningen/kunst maakt naast haar vaste job.
        Ik hou ervan om met verschillende materialen te werken. Zo werk ik
        bijvoorbeeld eenderzijds digitaal en anderzijds traditioneel en soms een
        combinatie van beide. Traditioneel hou ik ervan om met: balpen ,
        kleurpotloden, waterverf, stift, …. te werken. Experimenteren en
        afwisseling vind ik leuk ! Met balpen heb ik net ietsje meer ervaring.
        Zo heb ik een hele periode alleen maar ‘Bic art ‘ gemaakt. (A4
        realistische portretten met een blauwe balpen.) Bic art vraagt veel
        focus waardoor dit een werk is dat best veel tijd vraagt. In de digitale
        kunst ben ik nog een groentje. Ik werk met een iPad en een pen op het
        programma Adobe Fresco. Hier probeer ik mijn weg nog wat in te vinden.
        Neem hier een kijkje naar wat ik allemaal doe ‘ galerij ‘
      </p>
      <div className="icons-wrapper">
        <h3>Connect with me through social media!</h3>
        <div>
          <i className="social-media-1 fab fa-facebook-square fa-4x me-5"></i>
          <i className="social-media fab fa-instagram-square fa-4x"></i>
        </div>
      </div>
    </div>
  );
};

const ScrollableRow = () => {
  return (
    <div id="scrollable-row">
      <img
        className="img-fluid card"
        src="./src/assets/images/card_02.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_03.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_04.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_05.png"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_06.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_07.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_01.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_08.png"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_09.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_10.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_11.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_12.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_13.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_14.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="./src/assets/images/card_15.jpg"
        alt=""
      />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="col-12">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/assets/images/tekening_freedomfighter_digitaal_PNG.png"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="src/assets/images/tekening_giraffe_balpen_JPEG.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="src/assets/images/tekening_leeuw_balpen_JPEG.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

// ! Home parent component
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Hero />
        <Text />
      </div>

      <div className="row">
        <ScrollableRow />
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Home;
