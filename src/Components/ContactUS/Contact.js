import React from 'react'
import image1 from '../../images/florian-schmidinger-b_79nOqf95I-unsplash (1).jpg'
import image2 from '../../images/pixasquare-4ojhpgKpS68-unsplash (1).jpg'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import { FaPhone } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { SiMinutemailer } from 'react-icons/si'
import './contact.css'
import ContactModal from './Contactmodal';

const Contact = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        
        <div className="card text-center" id='contact'  className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-header shadow-lg p-3 mb-5 bg-white rounded" style={{ color: 'black', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                Home Of the Week
            </div>
            <div className='container' >
                <div className='col'>
                    <div className='row'>
                        <div className='carousel'>

                            <Carousel style={{ borderRadius: '20px' }}  >
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image1}
                                        alt="Image One"
                                    />
                                    <Carousel.Caption>
                                        <h3>Coming Soon</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000} >
                                    <img className="shadow-lg p-3 mb-5 bg-grey rounded"
                                        className="d-block w-100 h-100"
                                        src={image1}
                                        alt="Image Two"
                                    />
                                    <Carousel.Caption>
                                        <h3>Coming Soon</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <h5 className="card-title" style={{ color: 'black', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>Nice Model Homes</h5>
                <p className="card-text" style={{ color: 'black', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>If you are interested please contact us</p>

            </div>

        </div>



    )
}

export default Contact