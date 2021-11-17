import React from 'react';
import { Link } from 'react-router-dom';
// Style
import './header-info.css';

const HeaderInfo = () => {
    return (
        <section className='container'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5 px-0">
                    <div className="header-info-container w-100 p-lg-5">
                        <h1 className="fw-bold mb-2 mb-md-3">Five stars insurance</h1>
                        <h6 className="fw-bold mb-4 mb-md-2 mb-lg-4">Redbridge Insurance Company, Ltd has a Best’s Credit Rating of B ++.</h6>
                        <p className='header-info-text'>
                            Redbridge is an insurance and reinsurance management group specialized in global operations,
                            which provides a wide range of business support services through its risk capital, business
                            processes outsourcing, and consulting divisions.
                        </p>
                        <p>
                            To see the latest rating, access
                            <span className="fw-bolder"> www.ambest.com.</span>
                        </p>
                        <div className="d-flex justify-content-end">
                            <Link to='/' className="learn-more text-decoration-none">Learn More &#8594;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderInfo
