import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Zohra Jabin
        </Link>
        <div className='d-flex'>
          <Link to='/cart' className='btn btn-secondary' type='submit'>
            Cart
            <span class='badge bg-primary mx-3'>4</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
