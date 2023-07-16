import React from "react";
import './Header.css';
import {BiMenuAltRight}from "react-icons/bi"

export const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container paddings innerWidth flexCenter">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="h-menu flexCenter">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
      <div className="menu-icon">
        <BiMenuAltRight size={30}/>
      </div>
    </section>
  );
};
