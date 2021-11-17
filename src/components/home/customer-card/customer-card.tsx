import React from 'react'
import { CustomerCardModel } from './customer-card.model';

// Style 
import './customer-card.css';

const CustomerCard = (props: { customerReview: CustomerCardModel }) => {
    const customerReview = props.customerReview;
    return (
        <div className='card'>
            <p className='mb-4'>{customerReview.review}</p>
            <h3>{customerReview.name}</h3>
            <h5>{customerReview.position}</h5>
        </div>
    )
}

export default CustomerCard
