import React from 'react';
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import InsuranceInfo from '../../components/about/insurance-info/info';
import CeoComponent from '../../components/about/ceo-component/ceo-component';
import AboutReuse from '../../components/about/about-reuse/about-reuse';
import NewsCard from '../../components/about/news-card/news-card';
import NewsCardData from '../../components/about/news-card/news-data';

//Style
import './about.css';


const About = () => {
    const relationshipData = {
        title: 'We believe in win-win, long term relationships',
        header: 'We believe our commercial relationships should bring consistent benefits to both parties',
        text: `
            It is for this reason that we place special emphasis on the qualifications,
            experience and commitment of our staff. Our strategic approach to human resources
            allows us to harmonize the size and skills of our staff with the current and future
            requirements of our company as a leader in the global insurance and reinsurance market.
        `
    };
    const missionData = {
        title: 'Our mission:',
        header: `Offering innovative solutions with high social impact for our customers.`,
        text: `
            It is for this reason that we place special emphasis on the qualifications,
            experience and commitment of our staff. Our strategic approach to human resources
            allows us to harmonize the size and skills of our staff with the current and future
            requirements of our company as a leader in the global insurance and reinsurance market.
        `
    };

    const sertificateData = {
        title: `A significant achievement for the company`,
        header: `Edmund Santiago, RICL’s President and CEO, proudly announced this recognition by A.M. Best`,
        text: `
            This accomplishment, is the result of our commitment to our business partners and clients and is
            a positive reflection of the company’s operating model and long term business strategy. Founded 
            in 1899, A.M. Best is one of the oldest and most authoritative insurance rating entities. 
            Ratings are assigned after an extensive quantitative and qualitative evaluation of
            the company’s finances and operating performance.
        `
    };




    return (
        <div>
            <div className="container-fluid p-0 bg-white">
                <Navbar></Navbar>
                <div className="container-fluid insurance-info bg-white ">
                    <div className="row">
                        <div className="col-12 col-lg-6 bg-img order-2 order-lg-1"></div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <InsuranceInfo></InsuranceInfo>
                        </div>
                    </div>
                </div>
                <div className="ceo-container text-white">
                    <CeoComponent></CeoComponent>
                </div>
                <div className="mission-container">
                    <div className="container py-0 mx-auto">
                        <div className="row">
                            <div className="col-12 col-lg-7 me-lg-auto">
                                <div className="card">
                                    <AboutReuse data={missionData}></AboutReuse>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-12 col-lg-6"></div>
                        <div className="col-12 col-lg-6 bg-img"></div>
                    </div>
                </div>
                <div className="relationship-container">
                    <div className="row mx-auto">
                        <div className="col-12 col-lg-6 bg-img order-2 order-lg-1"></div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <div className="box">
                                <AboutReuse data={relationshipData}></AboutReuse>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sertificate-container">
                    <div className="container py-0 mx-auto sertificate-container-info">
                        <div className="row">
                            <div className="col-12 col-lg-7 me-lg-auto text-white">
                                <AboutReuse data={sertificateData}></AboutReuse>
                                <button className="btn">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-12 col-lg-4 bg-img ms-auto"></div>
                    </div>
                </div>
                <div className="news-container">
                    <div className="container">
                        <h1>Discover Redbridge</h1>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="row">
                                    {NewsCardData.map((data) => {
                                        return (
                                            <div className="col-12 col-md-4 col-lg-12 mb-4">
                                                <NewsCard data={data} key={data.id}></NewsCard>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 bg-img"></div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default About
