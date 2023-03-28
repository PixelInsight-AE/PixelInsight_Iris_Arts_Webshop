const Hero = () => {
  return (
    <div id="hero-section" className="col-8">
      <h2 id="hero-text">In every drawing there's a story</h2>
      <img
        className="img-fluid"
        src="src/assets/images/tekening_myheartgrenadeinpieces_digitaal_2022_JPEG.jpg"
        alt="image here"
      />
      <p>some text?</p>
    </div>
  );
};

const Text = () => {
  return (
    <div className="col-4">
      <h1>Over Mij</h1>
      <p>
        Welkom ! z Je snuffelt rond op de website van Iris arts. Ik ben een
        kunstenares die tekeningen/kunst maakt naast haar vaste job. Ik hou
        ervan om met verschillende materialen te werken. Zo werk ik bijvoorbeeld
        eenderzijds digitaal en anderzijds traditioneel en soms een combinatie
        van beide. Traditioneel hou ik ervan om met: balpen , kleurpotloden,
        waterverf, stift, …. te werken. Experimenteren en afwisseling vind ik
        leuk ! Met balpen heb ik net ietsje meer ervaring. Zo heb ik een hele
        periode alleen maar ‘Bic art ‘ gemaakt. (A4 realistische portretten met
        een blauwe balpen.) Bic art vraagt veel focus waardoor dit een werk is
        dat best veel tijd vraagt. In de digitale kunst ben ik nog een groentje.
        Ik werk met een iPad en een pen op het programma Adobe Fresco. Hier
        probeer ik mijn weg nog wat in te vinden. Neem hier een kijkje naar wat
        ik allemaal doe ‘ galerij ‘
      </p>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="col-12">
      <h1>Carousel</h1>
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
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
};

export default Home;
