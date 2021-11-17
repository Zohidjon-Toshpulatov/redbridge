import React from 'react';
import { ServiceModel } from './service.model';
import './service-card.css';

const ServiceCard = (props: { service: ServiceModel }) => {
    const service = props.service;
    return (
        <div className='card p-4'>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
        </div>
    )
}

export default ServiceCard;
