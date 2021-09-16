import React from "react";
import "../header/Header.css"

const Header = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper bg-primary">
            <ul>
            <a href="#!" className="brand-logo">
              Interview Book
            </a>
            </ul>
            <ul className=" right hide-on-med-and-down">
                <a href="sass.html">Login</a>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
