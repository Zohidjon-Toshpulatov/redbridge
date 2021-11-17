import React from 'react';
import ServiceCard from '../service/service-card';
import './mission.css';

const missionData = [
    {
        id: 1,
        title: 'Global Presence',
        desc: `International presence offers a level playing field
        in client service, underwriting, and policy and benefit administration.`
    },
    {
        id: 2,
        title: 'Seasoned Professionals',
        desc: `Our professionals have more than 25 years experience in
        the industry of international insurance and reinsurance.`
    },
    {
        id: 3,
        title: 'Awesome Products',
        desc: `Redbridge presents you a portfolio of highly
        competitive insurance products and assistance programs.`
    },
    {
        id: 4,
        title: 'Technology & Expertise',
        desc: `Our cutting edge technology with experienced insurance 
        professionals distinguishes Redbridge as a leading insurance management firm.`
    },
]

const Mission = () => {
    return (
        <div className='col-md-12 col-lg-10 ms-auto mission bg-white'>
            <div className="row">
                <div className="col-7">
                    <h1>The best covarage in the market</h1>
                </div>
            </div>
            <div className="row">
                {missionData.map(data => {
                    return <div className="col-12 col-md-6">
                        <ServiceCard service={data} key={data.id}></ServiceCard>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Mission;
