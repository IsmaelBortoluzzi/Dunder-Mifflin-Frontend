import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Navbar.css'; // Importing the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
          <img src="/images/imagens/home.png" alt="home" height="35" width="35" />
        </li>
      </ul>
      <ul className="nav-list-right">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          <img src="/images/imagens/user.png" alt="profile" height="35" width="35" />
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart</Link>
          <img src="/images/imagens/shopping-cart.png" alt="cart" height="35" width="35" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
