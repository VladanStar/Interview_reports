import React from "react";
const Header = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper bg-primary">
            <a href="index.html" className="brand-logo">Link to index.js?</a>
            <a href="sass.html" className="brand-logo">
              Interview Book
            </a>
            <ul className=" right hide-on-med-and-down">
              <li>
                <a href="index.html">Login</a>
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