import { useEffect } from "react";
import { useState } from "react";

import Category from "./Category";

const LeftSideBar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Simulate a data fetching function
    const fetchData = async () => {
      try {
        // Replace with your data fetching logic
        const response = await fetch("http://localhost:3000/category");
        const result = await response.json();
        setCategory(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-span-3 border">
      <h1 className="text-3xl mb-4">All Category</h1>

      {category.map((element) => (
        <Category key={element.id} element={element}></Category>
      ))}
    </div>
  );
};

export default LeftSideBar;
