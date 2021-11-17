import React from 'react';
import './about-reuse.css';

const AboutReuse = (props: { data: { title: string, header: string, text: string } }) => {
    const prop = props.data;
    return (
        <div>
            <div className="reuse-box">
                <h1 className='mb-0'>{prop.title}</h1>
                <h4 className='mb-0 py-3 my-md-4'>{prop.header}</h4>
                <p className='mb-0'>{prop.text}</p>
            </div>
        </div>
    )
}

export default AboutReuse;
