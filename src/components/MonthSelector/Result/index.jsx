import React from "react";
import "./style.css";

const Result = ({ title, fruits, vegetables }) => {
  return (
    <div id="Result">
      <h2 className="title">{title}</h2>
      {fruits && vegetables ? (
        <div className="lists">
          <div className="column">
            <h3>Fruits</h3>
            <ul className="result-list">
              {fruits?.map((element, key) => (
                <li className="result-item" key={key}>
                  {element}
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h3>Légumes</h3>
            <ul className="result-list">
              {vegetables?.map((element, key) => (
                <li className="result-item" key={key}>
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>
          Sélectionnez un mois de l'année pour visualiser les fruits et légumes
          de saisons.
        </p>
      )}
    </div>
  );
};

export default Result;
