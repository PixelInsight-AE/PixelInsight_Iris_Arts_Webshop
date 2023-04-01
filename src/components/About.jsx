const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <AboutPicture />
          <AboutInfo />
        </div>
      </div>
    </>
  );
};
const AboutPicture = () => {
  return (
    <>
      <div className="col-5">
        <div id="about-me-img">
          <img
            className="img-fluid"
            src="https://i.imgur.com/ABiSt9v.jpg"
            alt="Iris"
          />

          <div>
            <hr />
            <p>
              “Iris is een jonge kunstenares die zich vooral toelegt op het"{" "}
              <br />
              <span>-Iris Luyckx</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const AboutInfo = () => {
  return (
    <>
      <div className="col-7 p-0">
        <div id="about-me-info">
          <h1>About me</h1>
          <p>
            Hallo, Leuk dat jij op mijn website rondsnuffelt 🙂
            <br />
            Ik ben Iris, <br />
            Een twintiger uit België.
            <br />
            Ik ben al heel mijn leven creatief bezig. Toen ik In de lagere
            school zat ben ik gestart met tekenschool , en dat beviel mij wel.
            Knutselen en tekenen waren helemaal mijn ding !<br />
            In het middelbaar koos ik voor de richting publiciteit en zo was ik
            nog meer creatief bezig. Tijdens en na de schooluren.
            <br />
            <br />
            Maar Na een grote tegenslag in mijn leven dacht ik even dat ik mijn
            passie kwijt was. Mijn fijne motoriek en concentratie vermogen
            Kregen een flinke klap.
            <br />
            <br />
            Maar ik geef nooit op.
            <br />
            Ik behaalde alsnog een certificaat van publiciteit op mijn tempo.
            <br />
            <br /> Zo begon ik terug meer en meer te tekenen met plezier.
            <br /> En beetje bij beetje kwam mijn fijne motoriek terug. Alsook
            mijn hobby en passie.
            <br /> Na veel tekeningen later , had ik mijn eerste eigen (kleine)
            tentoonstelling.
            <br /> Wat was ik trots! <br />
            Ik hou ook van uitdagingen en experimenteren op creatief vlak.
            <br /> Zo wou ik heel graag digitaal beginnen te werken.
            <br /> Na uren lessen online volgen en sukkelen met een programma
            dat ik eigenlijk nog niet helemaal kende , had ik mijn eerste kleine
            ‘Digitaal’ projectje gemaakt.
            <br /> “My Heart Grenade in pieces “ <br />
            <br />
            Tegenwoordig teken ik in mijn vrije uren na mijn vaste job die ik
            ook heel graag doe. Ik hou ook van afwisseling. Zo ben ik het ene
            moment bezig met bv een balpen tekeningen en het andere met
            Waterverf, stift, kleurpotlood,…of ik teken op mijn iPad.
            <br /> Ik doe het allemaal even graag ! En dat mag nu gezien worden.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
