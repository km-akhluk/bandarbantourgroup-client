import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AddTour = () => {
    const { user } = useAuth()
    const { tourId } = useParams()

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // data.tour = service.name ;
        axios.post('http://localhost:5000/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successful')
                }
            })
    }
    return (
        <div className='add-service'>
            <h2 className='barlow text-center'>ADD TOUR</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Tour Name' className='book-input-style' type="text" {...register("name",)} />
                <input className='book-input-style' placeholder='Tour Description' type="text" {...register("description",)} />
                <input className='book-input-style' placeholder='Price' type="text" {...register("price",)} />
                <input className='book-input-style' placeholder='Total Time (days)' type="text" {...register("days",)} />
                <input className='book-input-style' placeholder='Location' type="text" {...register("location",)} />
                <input className='book-input-style' placeholder='Image Url' {...register("img",)} />
                {/* <input placeholder='address'  type="text" {...register("address",)} /> */}
                <input className='btn btn-primary' placeholder='' type="submit" />
            </form>

        </div>
    );
};
export default AddTour;