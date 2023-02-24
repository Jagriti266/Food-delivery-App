import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="desktop-navbar">
        <div className="left">
          <div className="bella-olonje-logo-111-1-wrapper">
            <img
              className="bella-olonje-logo-111-1"
              alt=""
              src="../bella-olonje-logo-111-1@2x.png"
            />
          </div>
        </div>
        <div className="right">
          <div className="desktop-menu">
            <div className="text-link">
              <div className="home">Home</div>
            </div>
            <div className="text-link">
              <div className="product">Product</div>
            </div>
            <div className="text-link">
              <div className="product">Faq</div>
            </div>
            <div className="text-link">
              <div className="product">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="headerimage">
        <img
          className="headerbackground-icon"
          alt=""
          src="../headerbackground@2x.png"
        />
        <div className="text-content">
          <b className="food-app">Food app</b>
          <div className="h1">
            <b className="why-stay-hungry-container">
              <p className="why-stay-hungry">{`Why stay hungry when `}</p>
              <p className="you-can-order">you can order form Bella Onojie</p>
            </b>
          </div>
          <div className="h4">
            <div className="download-the-bella">
              Download the bella onoje’s food app now on
            </div>
          </div>
        </div>
        <div className="big-button">
          <div className="master-button">
            <div className="text-button">
              <b className="app-store">Appstore</b>
            </div>
          </div>
        </div>
        <div className="big-button1">
          <Button className="master-button1" variant="primary">
            Playstore
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
