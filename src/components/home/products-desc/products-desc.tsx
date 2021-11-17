import React from 'react';

// style
import './products-desc.css';

const ProductsDesc = () => {
    return (
        <section className='products-desc-container w-100 text-white'>
            <h1 className='fw-bold mb-3 mb-md-2 mb-lg-4'>Products designed just for you</h1>
            <h3 className='fw-bold mb-lg-0'>We provide our clients a competitive advantage on accessing emerging insurance in the world.</h3>
            <p className='mt-3 mb-4 my-lg-4'>
                Redbridge underwrites a large variety of Life and Health (Individual and Group) products,
                as well as Property and Casualty products.  All of our Health products count with a vast
                Provider’s Network in the USA and Lain America. Our diverse range of products and services,
            </p>
            <button className="btn text-uppercase bg-white">See our list of products</button>
        </section>
    )
}

export default ProductsDesc;
