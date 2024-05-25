import { NavLink } from "react-router-dom";

const Category = ({ element }) => {
  //   console.log(element);
  return (
    <div>
      <li className="list-none mb-4">
        <NavLink>{element.name}</NavLink>
      </li>
    </div>
  );
};

export default Category;
