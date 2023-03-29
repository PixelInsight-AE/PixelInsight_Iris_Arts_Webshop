const Shop = () => {
  return (
    <>
      <main>
        <div className="shop-card">
          <h1>COMING SOON!</h1>
          <hr />
          <div className="d-flex d-flex-row">
            <div className="coming-soon">
              <p className="dutch-message">
                ("Er word nog gewerkt aan de webwinkel.
                <br />
                Kom binnenkort gerust weer een kijkje nemen!")
              </p>
              <hr />
              <p className="english-message">
                ("We are currently working on our shop.
                <br /> Please check back soon for more information!")
              </p>
            </div>
            <div style={{ marginLeft: 100 }}>
              <img
                className="img-fluid "
                src="https://i.imgur.com/W6LNlGE.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
