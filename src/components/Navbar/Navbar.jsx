import React from 'react';
import css from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <h1>Bookshelf</h1>
      <Link to="/favorites">
        <h3>Your Favorites</h3>
      </Link>
    </div>
  );
};

export default Navbar;
