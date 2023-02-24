import Header from "../components/Header";
import Box2 from "../components/Box2";
import Box4 from "../components/Box4";
import Box3 from "../components/Box3";
import Box5 from "../components/Box5";
import Footer from "../components/Footer";
import "./FoodApp.css";

const FoodApp = () => {
  return (
    <div className="foodapp">
      <Header />
      <img className="image4-icon" alt="PHONE" src="../group-53@2x.png" />
      <div className="hr" />
      <Box2 />
      <Box4 />
      <Box3 />
      <Box5 />
      <Footer />
      <div className="how-the-app">How the app works</div>
    </div>
  );
};

export default FoodApp;
