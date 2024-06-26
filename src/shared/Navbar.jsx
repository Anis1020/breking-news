import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>{" "}
      <li>
        <NavLink to={"/allNews"}>All News</NavLink>
      </li>{" "}
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"dashboard"}>Dashboard</NavLink>
        </li>
      )}
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        <Navigate to={"/"}></Navigate>;
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <span className="border border-red-500 p-3 rounded-full">
            <FaUser />
          </span>
          {user ? (
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          ) : (
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
