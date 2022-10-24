import { useEffect, useState } from "react";
import fruitsAndVegetables from "../data/fruitsAndVegetables.json";

const useFruitsAndVegetables = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(fruitsAndVegetables);
  }, []);

  return { content };
};

export default useFruitsAndVegetables;
