import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tour from '../Tour/Tour';
import './Tours.css'
const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    return (
        <div>
          <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                    <h1 className="text-center pt-4">Make your Holidays Special</h1>
                    <p className="text-center p-4"><i className="fas fa-bookmark text-danger"></i> Choose Now </p> 
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
                tours.map(tour =><div className="col mb-5">
                <div className="card h-100">
                        <Tour tour={tour}></Tour>
                   </div>
                   </div>
                )
            }
          </div>
  </div> </section>
        </div>
    );
};

export default Tours;