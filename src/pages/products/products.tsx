import React from 'react';

// Style 
import './products.css';
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';

const Products = () => {
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

export default Products
