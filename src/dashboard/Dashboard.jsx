import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 bg-slate-200">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/postNews"}>Post a news</NavLink>
        </li>
        <h1>Post News</h1>
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
