import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = ({ backURL, title }) => {
  const navigate = useNavigate();

  return (
    <header id="Header">
      <img
        className="back"
        onClick={() => navigate(backURL)}
        src="https://www.svgrepo.com/show/13655/back.svg"
        alt="Retour"
      />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
