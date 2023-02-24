import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-logo-light">
        <img className="image-12-icon" alt="" src="../image-12@2x.png" />
      </div>
      <div className="subtitle">
        <b className="copywright-2020-bella">
          Copywright 2020 Bella Onojie.com
        </b>
      </div>
      <div className="social-media">
        <img
          className="ant-designtwitter-outlined-icon"
          alt=""
          src="../antdesigntwitteroutlined.svg"
        />
        <img
          className="ant-designtwitter-outlined-icon"
          alt=""
          src="../antdesignfacebookfilled.svg"
        />
        <div className="ant-designtwitter-outlined-icon" />
      </div>
      <img className="instagram-icon" alt="" src="../instagram.svg" />
    </footer>
  );
};

export default Footer;
