import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/'> Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/about'>About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/features'>Features</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/famous'>Famous</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/video'>Video</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/watches'>  Watches</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/news'>News</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'activ' : ''} to='/product'>Product</NavLink></li>

                
            </ul>
        </div>
    );
};

export default Navbar;

