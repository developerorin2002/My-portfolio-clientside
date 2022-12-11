import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser,FaBriefcase, FaBook, FaAddressBook } from "react-icons/fa";
import './Header.css'

const Header = () => {
    return (
            <div className="nav-main">
                <ul className='nav-list'>
                    <li className='main-logo'><Link to="/banner">O</Link></li>
                    <li><p><FaHome/></p><Link to="/banner">Home</Link></li>
                    <li><p><FaUser/></p><Link to="/banner">About</Link></li>
                    <li><p><FaBriefcase/></p><Link to="/banner">Home</Link></li>
                    <li><p><FaBook/></p><Link to="/banner">Home</Link></li>
                    <li><p><FaAddressBook/></p><Link to="/banner">Home</Link></li>
                </ul>
            </div>
    );
};

export default Header;