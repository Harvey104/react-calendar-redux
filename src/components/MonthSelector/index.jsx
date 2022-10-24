import React, { useState } from "react";
import Item from "./Item";
import Result from "./Result";
import "./style.css";

const MonthSelector = ({ content }) => {
  const [selectedItem, setSelectedItem] = useState();

  console.log(content);

  const onClick = (name) => {
    setSelectedItem(content.find((item) => item.name === name));
  };
  return (
    <div id="MonthSelector">
      <div className="list">
        {(content || []).map((item) => (
          <Item
            key={item.id}
            selected={selectedItem?.id === item.id}
            title={item.name}
            id={item.id}
            onClick={() => onClick(item.name)}
          />
        ))}
      </div>
      <Result
        title={selectedItem?.name}
        fruits={selectedItem?.fruits}
        vegetables={selectedItem?.vegetables}
      />
    </div>
  );
};

export default MonthSelector;
