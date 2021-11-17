import React from 'react';
import './help.css';

//fontawesome
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import HomeIcon from '../../../assets/icons/home.png';
import Shield from '../../../assets/icons/sheild.png';

const Help = () => {
    return (
        <div>
            <div className="container mt-0 mt-lg-5">
                <div className="row">
                    <div className="px-0 col-sm-12 col-md-7 col-xl-5">
                        <div className="help-container">
                            <h1 className='mb-8 mb-md-3 mb-lg-2'>Let us help you</h1>
                            <p>
                                Stop worrying about what keeps you sleepless and just focus on enjoying life,
                                while we protect you and those who you love the most.
                            </p>
                            <div className="row">
                                <div className="col-4">
                                    <div className="box p-3 pt-4">
                                        <img src={HomeIcon} alt="" />
                                        <p className='text-uppercase mb-0 mt-3 fw-bold text-white'>explore redbridge site</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="box p-3 pt-4">
                                        <span className="plane-icon m-0">
                                            <FontAwesomeIcon icon={faPlane} />
                                        </span>
                                        <p className='text-uppercase mb-0 mt-2 fw-bold text-white'>go to redbridge assist</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="box p-3 pt-4">
                                        <img src={Shield} alt="" />
                                        <p className='text-uppercase mb-0 mt-3 fw-bold text-white'>discover insurance products</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
