import React from 'react';
import { Link } from 'react-router-dom';
import './tour.css'
const Tour = (props) => {
    const {name,description,img,_id,price,days,location}=props.tour
    return (
        <div>


<img className="card-img-top" src={img} alt="..." />
                        <div className="card-body p-4">
                            <div className="text-left">
                                <h5 className="fw-bolder">{name}</h5>
                                <p>Cost: {price}</p>
                                <p>Days: {days}</p>
                                 <p>Night: {location}</p>
                            </div>
                        </div>
                            
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                <Link to={`/bookTour/${_id}`}>
                                    <button className="btn btn-outline-danger mt-auto"><i className="fas fa-bookmark text-danger"></i> Book Now</button>
                                </Link>
                                </div>
                            </div>
            
        </div>
    );
};

export default Tour;