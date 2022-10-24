import React from "react";
import "./style.css";

const Item = ({ title, onClick, selected }) => {
  return (
    <div
      className={`month-selector_item ${selected && "active"}`}
      onClick={() => onClick()}
    >
      {title}
    </div>
  );
};

export default Item;
