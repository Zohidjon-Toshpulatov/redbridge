import React from 'react';
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';

// Style 
import './assist.css';

const Assist = () => {
    return (
        <>
            <div className="container-fluid p-0 bg-white">
                <Navbar></Navbar>
                <div className="container">
                    <h1>Products</h1>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Assist;
