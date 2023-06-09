import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="hero-section" className="col-8">
      <h2>In every drawing there's a story</h2>
      <img
        className="img-fluid"
        src="https://i.imgur.com/ZtjK7zy.jpeg"
        alt="image here"
      />
    </div>
  );
};

const Text = () => {
  return (
    <div id="over-mij" className="col-4">
      <h1>Welkom!</h1>
      <h2>Je snuffelt rond op de website van Iris arts.</h2>
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
        <div>
          <TypeAnimation
            className="type-animation"
            sequence={[
              "Follow me on social media",
              1000,
              "You can connect with me!",
              2000,
              "O",
              1000,
              "On Facebook",
              500,
              "Or on Instagram",
              2000,
              // "Connect with me through social media",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="h3"
            cursor={false}
            repeat={Infinity}
            style={{
              fontFamily: "Dancing Script",
              fontSize: "2em",
              display: "block",
            }}
          />
        </div>
        {/* <h3>Connect with me through social media!</h3> */}
        <div className="social-media">
          <a href="https://www.facebook.com/IrisArtss" target="_blank">
            <i className="social-media-icons fab fa-facebook-square fa-4x me-5"></i>
          </a>
          <a
            href="https://instagram.com/_iris_arts?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <i className="social-media-icons fab fa-instagram-square fa-4x"></i>
          </a>
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
        src="https://i.imgur.com/HelgYu3.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/hESMbp6.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/9fc34ak.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/ZLwBIk5.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/I50ya4j.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/QaXFbb6.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/4BiJFk5.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/zckbegQ.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/Ht40QEw.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/cmMB452.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/HGDHsGQ.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/G3uTYFA.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/uPr5Gv4.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/WljVJHo.jpg"
        alt=""
      />
      <img
        className="img-fluid card"
        src="https://i.imgur.com/9VpkQmR.jpg"
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
      <div id="divider-image">
        <img src="https://i.imgur.com/W6LNlGE.png" alt="yep" />
      </div>

      <div className="row">
        <ScrollableRow />
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Home;
