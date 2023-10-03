import React from 'react';
import css from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <Link to="/">
        <h1>BookSelf</h1>
      </Link>
      <Link to="/favorites">
        <h3>Your Favorites</h3>
      </Link>
    </div>
  );
};

export default Navbar;
