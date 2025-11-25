import React, { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { Contextapi } from "../../Authprovider/Authprovider";

const Navbar = () => {
  const { user, signout } = useContext(Contextapi);
  const [active, setActive] = useState("");

  const handleclick = () => {
    setActive("logout");

    signout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <nav>
      <NavLink to="/" className="mr-2 text-green-900">
        Home
      </NavLink>
      <NavLink to="/services" className="mr-2  text-green-900">
        Services
      </NavLink>
      <NavLink to="/profile" className="mr-2  text-green-900">
        My Profile
      </NavLink>
    </nav>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm text-green-900">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-green-900">PetPaw</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <nav>
          {!user ? (
            <Link
              to="/login"
              onClick={() => setActive("login")}
              className={`btn mr-2 ${
                active === "login" ? "bg-green-900 text-white" : ""
              }`}
            >
              Login
            </Link>
          ) : (
            <Link
              onClick={() => handleclick()}
              className={`btn mr-2 ${
                active === "logout" ? "bg-green-900 text-white" : ""
              }`}
            >
              Logout {user.displayName}
            </Link>
          )}

          <Link
            to="/register"
            onClick={() => setActive("register")}
            className={`btn mr-2  ${
              active === "register" ? "bg-green-900 text-white" : ""
            }`}
          >
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
