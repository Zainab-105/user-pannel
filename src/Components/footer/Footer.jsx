import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { Instagram, Twitter, Facebook } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className="footer">
    <Link to="/support">Support | </Link>
    <Link to="/developers">Developers | </Link>
    <Link to="/feedback">Feedback | </Link>
    <Link to="/instagram"><Instagram /></Link>
    <Link to="/twitter"><Twitter /></Link>
    <Link to="/facebook"><Facebook /></Link>
  </div>
  );
}
