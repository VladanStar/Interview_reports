import React from "react";

const Header = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper bg-primary">
            <a href="#!" className="brand-logo">
              Interview Book
            </a>
            <ul className=" right hide-on-med-and-down">
              <li>
                <a href="sass.html">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
