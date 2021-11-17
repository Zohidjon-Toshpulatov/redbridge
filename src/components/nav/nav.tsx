import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

// style
import './nav.css';



const Navbar = () => {
    return (
        <div className="container-fluid mx-0">
            <nav className="container navbar navbar-expand-lg">
                <button className="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faAlignJustify} />
                </button>
                <Link to='/' className='navbar-brand'>
                    <img src={Logo} alt="" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-lg-4">
                            <Link to='/about' className='nav-link text-uppercase'>about us</Link>
                        </li>
                        <li className="nav-item me-lg-4">
                            <Link to='/products' className='nav-link text-uppercase'>products</Link>
                        </li>
                        <li className="nav-item me-lg-4">
                            <Link to='/assist' className='nav-link text-uppercase'>helpful links</Link>
                        </li>
                        <li className="nav-item me-lg-4">
                            <Link to='/clients' className='nav-link text-uppercase'>clients</Link>
                        </li>
                        <span className="border-login me-lg-4"></span>
                        <li className="nav-item me-lg-4">
                            <a className="nav-link text-uppercase" href="/">
                                <FontAwesomeIcon icon={faUser} />
                                <span className="ps-1">login</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="/" className="contact-link">Contact</a>
            </nav>
        </div>

    )
}

export default Navbar
