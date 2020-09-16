import React from 'react';
import './Home.css'
import logo from '../../project_image/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import sreemongolImage from '../../project_image/Image/Sreemongol.png'
import sundorbanImage from '../../project_image/Image/sundorbon.png'
import coxsBazarImage from '../../project_image/Image/Rectangle 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="main-container">
           <div className="container">
            <nav>
                <div className="logo">
                    <img className="logo-color" style={{height:"56px",width:"120.26px"}} src={logo} alt=""/>
                </div>
                <div className="search-box">
                    <input placeholder="search your destination..." type="text"/>
                </div>
                <button className="button">Log in</button>
                <ul>
                    <li><a href="/news">News</a></li>
                    <li><a href="/destination">Destination</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
             </nav>
        </div>
            <div className="container place-details">
                <div className="places">
                    <div className="place-image">
                        <img src={coxsBazarImage} alt=""/>
                        <p>COX'S BAZAR</p>
                        <Link to="/booking/coxsbazar">
                        <button style={{fontWeight:"700"}} className="booking-button">Booking<FontAwesomeIcon style={{marginLeft:"5px"}} icon={faArrowRight}/></button>
                        </Link>  
                    </div>
                    <div className="place-image">
                        <img src={ sreemongolImage} alt=""/>
                        <p>SREEMANGAL</p>
                        <Link to="/booking/sreemangal">
                        <button style={{fontWeight:"700"}} className="booking-button">Booking<FontAwesomeIcon style={{marginLeft:"5px"}} icon={faArrowRight}/></button>
                        </Link>
                    </div>
                    <div className="place-image">
                        <img src={sundorbanImage} alt=""/>
                        <p>SUNDERBAN</p>
                        <Link to="/booking/sunderban">
                        <button style={{fontWeight:"700"}} className="booking-button">Booking<FontAwesomeIcon style={{marginLeft:"5px"}} icon={faArrowRight}/></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;