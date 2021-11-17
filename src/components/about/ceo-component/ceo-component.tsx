import Quotes from '../../../assets/about-page/quotes.png';
import Ceo from '../../../assets/about-page/ceo.jpg';

// Style
import './ceo-component.css';

const CeoComponent = () => {
    return <div className='container'>
        <div className="row">
            <div className="col-12 col-lg-8 mx-lg-auto">
                <img src={Quotes} alt="" className="quotes mb-4" />
                <h4 className='mb-4'>
                    Our main objective is to improve the commercial success of our reinsured clients
                    through the services we offer as a reinsurance manager and as a reinsurer.
                </h4>
                <div className="d-flex align-items-center ceo-detail">
                    <img src={Ceo} alt="" className="ceo-img me-4" />
                    <div>
                        <p className="mb-0 text-uppercase">edmund santiago</p>
                        <span className='text-uppercase'>president & ceo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CeoComponent;