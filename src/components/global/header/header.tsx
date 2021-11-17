import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './header.css';

import logo from '../../../assets/Logo1.png';

const Header = () => {
    return (
        <section className='container-fluid bg-white px-0 header py-3'>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={logo} alt="" className="logo" />
                <div className="emergency d-flex flex-column flex-md-row justify-content-around align-items-center">
                    <span className=''>
                        <span className='pe-1'><FontAwesomeIcon icon={faWhatsapp} /></span>
                        <span className=''>Emergency Call </span>
                    </span>
                    <span className="p-number ps-1">+1-786-653-3717</span>
                </div>
                <div className="language d-flex flex-column flex-md-row justify-content-around align-items-center">
                    <span className="language-text">Language</span>
                    <select className="form-select border-0 text-danger" aria-label="Default select example">
                        <option value='english'>EN</option>
                        <option value="spanish">SP</option>
                    </select>
                </div>
            </div>
        </section>

    )
}

export default Header;
