import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./Box5.css";

const Box5 = () => {
  return (
    <section className="box5">
      <img className="footerimage-icon" alt="" src="../footerimage@2x.png" />
      <div className="text-content4">
        <div className="h23">
          <b className="download-the-app">Download the app now.</b>
        </div>
        <div className="h44">
          <div className="available-on-your">
            Available on your favorite store. Start your premium experience now
          </div>
        </div>
      </div>
      <div className="action-content">
        <div className="buttons">
          <Button variant="primary">Playstore</Button>
          <div className="button">
            <div className="text-button1">
              <b className="app-store1">App store</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box5;
