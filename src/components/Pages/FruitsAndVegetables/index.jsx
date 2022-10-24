import React from "react";
import useFruitsAndVegetables from "../../../hooks/useFruitsAndVegetables";
import Footer from "../../Footer";
import Header from "../../Header";
import MonthSelector from "../../MonthSelector";
import "./style.css";

const FruitsAndVegetables = () => {
  const { content } = useFruitsAndVegetables();

  return (
    <div id="FruitsAndVegetables">
      <Header title="Fruits et légumes de saison" backURL="/" />
      <MonthSelector content={content} />
      <Footer />
    </div>
  );
};

export default FruitsAndVegetables;
