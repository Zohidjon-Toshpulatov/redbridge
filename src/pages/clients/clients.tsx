import React from 'react';
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';

// Style 
import './clients.css';

const Clients = () => {
    return (
        <div>
            <div className="container-fluid p-0 bg-white">
                <Navbar></Navbar>
                <div className="container">
                    <h1>Clients</h1>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Clients;
