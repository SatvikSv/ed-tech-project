import React from 'react'
import './navbar.css';

import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='logo'>
                    AJ World
                </div>
                <div className='menu'>
                    <Link to='/'>
                        <a href=''>
                            Home
                        </a>
                    </Link>
                    <Link to='/resource'>
                        <a href=''>
                            Resources
                        </a>
                    </Link>
                    <Link to='/classes'>
                        <a href=''>
                            All Classes
                        </a>
                    </Link>
                    <Link to='/myclasses'>
                        <a href='#'>
                            My Classes
                        </a>
                    </Link>
                    <Link to='/contact'>
                        <a href=''>
                            Contact Us
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
