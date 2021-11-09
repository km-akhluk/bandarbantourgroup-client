import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
   
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div> 

            {/* banner */}
            
            <section style={{background: 'linear-gradient(184deg, rgba(2,0,36,1) 0%, rgba(197,67,59,1) 100%, rgba(0,212,255,1) 100%)'}}>
            <div className="container-fluid main-section">
            <div className="row">
                    <div className="offset-lg-2 col-lg-8 section-part text-center" >
                    <h1 style={{fontFamily: 'Nanum Brush Script' , fontSize: '100px'}}>Bandarban Tour Group</h1>
                    <p>Make your holidays beautiful with us</p>
                    <button className="btn btn-danger" >Book Now</button>
                    </div>
                    </div>
                    </div>
                    </section>

            {/* banner end */ }

            {/* shortcut info*/}
            <section className="features-icons bg-light text-center p-4"><br /><br /><br />
            <div className="container ">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i class="fas fa-suitcase-rolling w-100 text-danger " style={{fontSize: '70px'}}></i></div> <br />
                            <h3>Pack Bags</h3>
                            <p className="lead mb-0">Pack your bags for the tour</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i class="fas fa-bookmark w-100 text-danger" style={{fontSize: '70px'}}></i></div> <br />
                            <h3>Book Us</h3>
                            <p className="lead mb-0">Call or book our packages and let us know</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i class="fas fa-plane-departure w-100 text-danger" style={{fontSize: '70px'}}></i></div> <br />
                            <h3>Tour</h3>
                            <p className="lead mb-0">Boom! flight is ready for the tour</p>
                        </div>
                    </div>
                </div>
            </div> <br /><br /><br />
        </section>
            {/* shortcut */}

            {/* All bookings start */}
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                    <h1 className="text-center pt-4">Make your Holidays Special</h1>
                    <p className="text-center p-4"><i className="fas fa-bookmark text-danger"></i> Choose Now </p> 
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                     {
                tours.slice(0,8).map(tour => <div className="col mb-5">
                    <div className="card h-100">
                        <img className="card-img-top" src={tour.img} alt="..." />
                        <div className="card-body p-4">
                            <div className="text-left">
                                <h5 className="fw-bolder">{tour.name}</h5>
                                <p>Cost: {tour.price}</p>
                                <p>Days: {tour.days}</p>
                                 <p>Night: {tour.location}</p>
                            </div>
                        </div>
                            
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                <Link to={`/bookTour/${tour._id}`}>
                                    <button className="btn btn-outline-danger mt-auto"><i className="fas fa-bookmark text-danger"></i> Book Now</button>
                                </Link>
                                </div>
                            </div>
                        </div> </div>
                )}


                    
                    
                 
                </div>
            </div>
        </section>

        {/* All bookings end */}

        {/* clents */}
        <section id="clients" className="section-bg">
    <div className="container">
        <div className="section-header">
            <h3>Our CLients</h3>
            <p>Meet our happy clients</p>
        </div>
        <div className="row no-gutters clients-wrap clearfix wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460149/abof.png" className="img-fluid" alt="" /> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460224/cropped-cropped-20170720-lucuLogo-squ2-e1500543540803.png" className="img-fluid" alt="" /> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460269/104840a62d46c05d285762857fecb61a.png" className="img-fluid" alt="" /> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460358/client-4.png" className="img-fluid" alt="" /> </div>
            </div>
            
            
        </div>
    </div>
</section>
        {/* clents */}


        {/* contact start */}
            <section>
            <div className="container w-75 bg-light p-5">
                <h1 className="text-center">Contact Us</h1>

<form id="contactForm">
    <div className="mb-3">
    <label className="form-label" for="name">Name</label>
    <input className="form-control" id="name" type="text" placeholder="Name" />
    </div>
    <div className="mb-3">
    <label className="form-label" for="emailAddress">Email Address</label>
    <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
    </div>
    <div className="mb-3">
    <label className="form-label" for="message">Message</label>
    <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height: '10rem'}}></textarea>
    </div>
    <div className="d-grid">
    <button className="btn btn-primary btn-lg" type="submit">Submit</button>
    </div>
    </form>
    </div>
    </section>
        
        {/* contact end */}
    


    
       
           
        </div>
    );
};

export default Home;