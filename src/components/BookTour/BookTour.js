import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './booktour.css'
const BookTour = () => {
    const { user } = useAuth()
    const { tourId } = useParams()

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.tour = service.name ;
        data.img = service.img ;
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successful')
                }
            })
    }

    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/tours/${tourId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


console.log(service);
    return (
        <div className='add-service container bg-light'>
            <div className='overflow-handle text-center'>
                <h1>                <img src={service.img} style={{borderRadius:'20px'}} className='img-fluid w-25 ' alt="" />
</h1>
            </div>

            <div className="card-body p-4 text-center">
                            <div className="text-left">
                                <h5 className="fw-bolder">{service.name}</h5>
                                <p>Cost: {service.price}tk</p>
                                <p>Days: {service.days}</p>
                                 <p>Location: {service.location}</p>
                            </div>
                        </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='book-input-style ps-2' placeholder='' defaultValue={service.name} type="text" {...register("tour",)} />
                <input className='book-input-style ps-2' placeholder='Your Name' defaultValue={user.displayName} type="text" {...register("name",)} />
                <input className='book-input-style ps-2' placeholder='email' defaultValue={user.email} type="email" {...register("email",)} />
               
                <input className='book-input-style hidden-input ps-2' required placeholder='Address' defaultValue={service.location} {...register("img",)} />
               
                <input className='book-input-style ps-2' required placeholder='Address' type="text" {...register("address",)} />
                <input placeholder='' value='Place Order' className='btn btn-primary' type="submit" />
            </form>

        </div>
    );
};

export default BookTour;