import React from 'react';

const PartnerImage = (props: { imgPath: string }) => {
    return (
        <div>
            <img src={props.imgPath} alt="" style={{ 'width': '94px' }} />
        </div>
    )
}

export default PartnerImage;
