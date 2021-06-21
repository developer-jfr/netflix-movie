import React, { useState, useEffect } from "react";
import "./nav.css";

const Nav = () => {
 const opacityHandler = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  }
    const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", opacityHandler);

    return () => {
      window.removeEventListener("scroll", opacityHandler);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
      />
    </div>
  );
};
export default Nav;
