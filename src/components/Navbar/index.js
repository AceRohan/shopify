import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
import "./Navbar.css"; 

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="navbar">
    
      <div className="navbar-top">
        <div className="container navbar-container">
          <div>
            <a href="#" className="logo">
              <img src={Logo} alt="Logo" className="logo-img" />
              Shopsy
            </a>
          </div>

          {/* Search bar */}
          <div className="search-section">
            <div className="search-group">
              <input type="text" placeholder="search" className="search-input" />
              <IoMdSearch className="search-icon" />
            </div>

            {/* Order Button */}
            <button  className="order-btn" onClick={() => handleOrderPopup()}>
              <span className="order-text">Order</span>
              <FaCartShopping className="cart-icon" />
            </button>

            {/* Dark Mode */}
            {/* <DarkMode /> */}
          </div>
        </div>
      </div>

      
      <div className="navbar-bottom">
        <ul className="menu-list">
          {Menu.map((item) => (
            <li key={item.id}>
              <p  className="menu-link">
                {item.name}
              </p>
            </li>
          ))}
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">
              Trending Products <FaCaretDown className="caret-icon" />
            </a>
            <div className="dropdown-menu">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} className="dropdown-item">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
