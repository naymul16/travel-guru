import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Placeinformation from '../../Fakedata/PlaceInformation';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../project_image/Logo.png'
import './Booking.css'
import { useForm } from 'react-hook-form';



const Booking = () => {
    //react hook form
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


    const placeData = Placeinformation;
    const {placeName} = useParams();
    const  placeInfo= placeData.find(Place => Place.name === placeName)

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

           <div className="container">
                <div className="booking-container">

                    <div className="about-place">
                        <h1>{placeName}</h1>
                        <p>{placeInfo.description}</p>
                    </div>

                    <div className="booking-form">
                        <div className="form-container">
                           <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label style={{color:'grey',fontweight:"500"}} for="origin">Origin</label>
                                    <input className="form-control" name="origin" id="origin" ref={register({ required: true })} />
                                    {errors.origin && <span style={{color:'red'}}>origin is required</span>}
                                </div>
                                <div className="form-group">
                                    <label style={{color:'grey',fontweight:"500"}} for="destination">Destination</label>
                                    <input className="form-control" name="destination" id="destination" ref={register({ required: true })} />
                                    {errors.destination && <span style={{color:'red'}}>Destination is required</span>}
                                </div>

                                <div className="from-to-date">
                                    <div className="form-group">
                                        <label style={{color:'grey',fontweight:"500"}} htmlFor="destination">From</label>
                                        <input type="date" className="form-control" name="fromDate" id="from" ref={register({ required: true })} />
                                        {errors.fromDate && <span style={{color:'red'}}>From date is required</span>}
                                    </div>
                            
                                    <div className="form-group">
                                        <label style={{color:'grey',fontweight:"500"}} for="to">To</label>
                                        <input type="date" className="form-control" name="toDate" id="to" ref={register({ required: true })}/>
                                        {errors.toDate && <span style={{color:'red'}}>To Date is required</span>}
                                   </div>
                                </div>

                                {/* this is the form submit button */}
                                <Link to="/search">
                                    <input style={{backgroundColor:"#F9A51A",color:"black",fontWeight:"700"}} className="form-control" type="submit" value="Start Booking" />
                                </Link>
                         </form>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Booking;