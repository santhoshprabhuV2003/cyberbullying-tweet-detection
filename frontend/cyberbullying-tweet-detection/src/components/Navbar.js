import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const  [Mobile, setMobile] = useState(false);

    return(
        <nav className='navbar'>
            <h3 className='app-name'>Cyberbullying Tweet Detection</h3>

            <ul className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/models'><li>Models</li></Link>
                <Link to='/dataset'><li>Dataset</li></Link>
            </ul>

            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                {Mobile? <ImCross /> : <FaBars />}
            </button>
        </nav>
    )
}

export default Navbar;