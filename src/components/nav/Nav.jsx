import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHome, BiUser, BiCodeAlt, BiMessageDots } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import './Nav.css'

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <BiHome />
      </Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        <BiUser />
      </Link>
      <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>
        <BiCodeAlt />
      </Link>
      <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
        <MdWorkOutline />
      </Link>
      <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
        <BiMessageDots />
      </Link>
    </nav>
  );
}

export default Nav;
