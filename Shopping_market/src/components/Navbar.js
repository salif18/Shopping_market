import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
           <div className='navbar'>
              <NavLink to='/' className={({isActive}) => (isActive ? 'activLink' : undefined)}><li><i class="fa-solid fa-house"></i></li></NavLink>
              <NavLink to='/produits' className={({isActive}) => (isActive ? 'activLink' : undefined)} ><li><i class="fa-solid fa-shop"></i></li></NavLink>
              <NavLink to='/panier' className={({isActive}) => (isActive ? 'activLink' : undefined)}><li><i class="fa-solid fa-cart-shopping"></i></li></NavLink>
              <NavLink to='/admin' className={({isActive}) => (isActive ? 'activLink' : undefined)}><li><i class="fa-solid fa-lock"></i></li></NavLink>
           </div>
        </>
    );
};

export default Navbar;