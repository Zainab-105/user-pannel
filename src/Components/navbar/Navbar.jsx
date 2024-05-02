import React from 'react';
import './navbar.css';
import logo from '../Assets/logo.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" /> Ilm Al-Hadith
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Hadith</Link>
            </li>
            <li className="nav-item">
              <Link to="/prayer" className="nav-link">Prayer Times</Link>
            </li>
            <li className="nav-item">
            <Link to="/About" className="nav-link">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
