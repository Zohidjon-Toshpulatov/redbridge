import React from 'react';

import Nav from '../../components/nav/nav';
import HeaderInfo from '../../components/home/header-info/header-info';
import Mission from '../../components/home/mission/mission';
import ProductsDesc from '../../components/home/products-desc/products-desc';
import ServiceCard from '../../components/home/service/service-card';
import CustomerCard from '../../components/home/customer-card/customer-card';
import PartnerImage from '../../components/home/parter-image/partner-image';
import Footer from '../../components/footer/footer';

import customersData from '../../components/home/customer-card/customer-data';
import imagePaths from '../../components/home/parter-image/image-paths';
// style
import './home.css';


const Home = () => {
    const services = [
        {
            id: 1,
            title: "WorldWide",
            desc: `Coordination of benefits with an average of more than 10,000 
            assists coordinated during the past 2 years.`
        },
        {
            id: 2,
            title: 'Availability',
            desc: `Redbridge’s servers provide security, redundant power
            and monitoring system to ensure 24/7 availability, `,
        },
        {
            id: 3,
            title: 'Excellence',
            desc: `Our call center has multilingual resources, providing VIP services 24 hours a day, 7 days a week.`
        }
    ];

    return (
        <div className='container-fluid px-0 bg-white'>
            <header>
                <Nav></Nav>
                <HeaderInfo></HeaderInfo>
            </header>
            <div className="mission-container position-relative">
                <div className="container">
                    <div className="row">
                        <Mission></Mission>
                    </div>
                </div>
                <div className="row m-0 postion-relative">
                    <div className="col-12 col-lg-5 img p-0">
                    </div>
                    <div className="d-none d-lg-block col-lg-7 p-0"></div>
                </div>

            </div>
            <div className="products-desc position-relative">
                <div className="container products-desc-text">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <ProductsDesc></ProductsDesc>
                        </div>
                    </div>
                </div>
                <div className="m-0 row">
                    <div className="ms-auto col-12 col-lg-4 p-0">
                        <div className="img"></div>
                        {/* <img src={HappyFamily} alt="" className="img" /> */}
                    </div>
                </div>

            </div>
            <div className="container service">
                <h1 className="fw-bold">Our priority is to provide you the best service</h1>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7 bg-girl">

                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        {services.map(service => {
                            return <div className="card-container">
                                <ServiceCard service={service} key={service.id}></ServiceCard>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className="customer-img"></div>
            <div className="container reviews">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-5">
                        <h1>See what our customers are saying about us</h1>
                    </div>
                    <div className="row mx-0 px-0">
                        {customersData.map(customerReview => {
                            return (
                                <div className="col-12 col-md-lg mb-3">
                                    <CustomerCard customerReview={customerReview} key={customerReview.id}></CustomerCard>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="b-partners-container">
                <div className="container">
                    <h1>Meet our business associates</h1>
                    <div className="d-flex flex-row flex-wrap">
                        {imagePaths.map((imgPath, index) => {
                            return <div className="mx-4 mb-3">
                                <PartnerImage imgPath={imgPath} key={index}></PartnerImage>
                            </div>
                        })}
                    </div>

                </div>
            </div>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default Home;
