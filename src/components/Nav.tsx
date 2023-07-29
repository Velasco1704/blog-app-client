import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { logOutUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Nav.scss";
import { useState } from "react";

export const Nav = () => {
  const [navBarState, setNavBar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/login");
  };
  return (
    <header className="navBar__header">
      <Link className="navBar__logo" to="/">
        <img className="navBar__logo__image" src={logo} alt="logo" />
      </Link>
      <button
        onClick={() => setNavBar(!navBarState)}
        className="navBar__button__FaBars"
      >
        <FaBars />
      </button>
      <nav className={`navBar__container ${navBarState && "open__menu"}`}>
        <div className="navNar__menu">
          <ul className="navBar__ul">
            <Link className="navBar__link" to="/">
              Home
            </Link>
            <Link className="navBar__link" to="/create">
              Create
            </Link>
            <Link className="navBar__link" to="/profile">
              Profile
            </Link>
            <button className="navBar__logOut" onClick={handleLogOut}>
              Log Out
            </button>
          </ul>
          <button
            onClick={() => setNavBar(!navBarState)}
            className="navBar__button__cross"
          >
            <FaTimes />
          </button>
        </div>
      </nav>
    </header>
  );
};
