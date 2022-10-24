import { React } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../../Calendar";
import Footer from "../../Footer";
import "./style.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div id="HomePage">
      <h1>VeggieCalendar</h1>
      <p>L'outil de suivi quotidien de votre consommation de viande</p>
      <Calendar />
      <p className="link" onClick={() => navigate("/fruits-vegetables")}>
        Découvrez les fruits et légumes de saison !
      </p>
      <Footer />
    </div>
  );
};

export default HomePage;
