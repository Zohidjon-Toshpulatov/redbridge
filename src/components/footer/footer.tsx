import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

// Sytle
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container container-fluid px-0">
                <div className='container text-white'>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-2">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="d-none d-md-block col-md-8 col-lg-7">
                            <div className="d-flex justify-content-evenly align-items-start">
                                <div className='d-flex flex-column  align-items-start'>
                                    <Link to='/about' className=' mb-2 link link-top text-uppercase'>About</Link>
                                    <Link to='/about' className=' mb-2 link'>Team</Link>
                                    <Link to='/about' className=' mb-2 link'>Locations</Link>
                                    <Link to='/about' className=' mb-2 link'>News/Press</Link>
                                </div>
                                <div className='d-flex flex-column align-items-start'>
                                    <Link to='/products' className=' mb-2 link link-top text-uppercase'>Products</Link>
                                    <Link to='/products' className=' mb-2 link'>Corporate</Link>
                                    <Link to='/products' className=' mb-2 link'>Health</Link>
                                    <Link to='/products' className=' mb-2 link'>Travel</Link>
                                    <Link to='/products' className=' mb-2 link'>Redbridge Assist</Link>
                                </div>
                                <div className='d-flex flex-column align-items-start'>
                                    <Link to='/about' className=' mb-2 link link-top text-uppercase'>helpful links</Link>
                                    <Link to='/about' className=' mb-2 link'>All links</Link>
                                    <Link to='/about' className=' mb-2 link'>Medical Providers</Link>
                                    <Link to='/about' className=' mb-2 link'>Network</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <p className="fw-bolder mb-3">Redbridge Group of Florida inc.</p>
                            <p className='mb-4'>1300 Ponce de Leon Blvd, Suite 103, Coral Gables, FL 33134 – USA</p>
                            <Link to='/' className='d-block text-white fw-light '>Terms & Conditions</Link>
                            <Link to='/' className='d-block text-white fw-light  mb-0'>Privacy Policy</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyright-container text-center py-2 py-md-3">
                <p className='mb-0 text-white fw-bold'>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
