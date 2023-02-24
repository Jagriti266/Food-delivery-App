import "./Box4.css";

const Box4 = () => {
  return (
    <section className="box4">
      <div className="content1">
        <div className="text-content-container">
          <div className="text-content2">
            <div className="h31">
              <b className="checkout">Checkout</b>
            </div>
            <div className="h21">
              <b className="when-you-done-container">
                <p className="when-you-done">When you done check out</p>
                <p className="and-get-it">and get it delivered.</p>
              </b>
            </div>
            <div className="h42">
              <div className="when-you-done-container1">
                <p className="when-you-done">{`When you done check out and get it `}</p>
                <p className="and-get-it">delivered with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="image3-icon" alt="" src="../image3@2x.png" />
    </section>
  );
};

export default Box4;
