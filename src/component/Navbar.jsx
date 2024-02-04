import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import { NavLink } from "react-router-dom";
import PopupMenu from "./PopupMenu";

const Navbar = ({ navlinks }) => {
  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => {
    setPopupState(!popupState);
  };
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  console.log(navState);
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header className={`nav-default ${navState && "nav-sticky"}`}>
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="logo/img" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((val, i) => (
              <li key={i}>
                <NavLink to={`/`} className=" text-lg text-slate-900 ">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden gap-7 ">
            <li>
              <button type="button" className="button-emrald text-base py-1">
                Join
              </button>
            </li>
          </ul>
          <ul>
            <li className="hidden lg:flex items-center">
              <button
                type="button"
                onClick={onTriggerPopup}
                className="flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
    </>
  );
};

export default Navbar;
