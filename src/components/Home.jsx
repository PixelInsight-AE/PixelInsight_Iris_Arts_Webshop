const Hero = () => {
  return (
    <div className="col-8">
      <h1>Hero</h1>
      <img
        className="img-fluid"
        src="src/assets/images/Logo_IrisArts_digitaal_JPEG.jpg"
        alt="image here"
      />
      <p>some text?</p>
    </div>
  );
};

// ! Home parent component
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Hero />
      </div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
};

export default Home;
