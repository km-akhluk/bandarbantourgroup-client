import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Myorders.css'
const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const remaining = data.filter(service => service.email == user.email)
                setOrders(remaining)

            })
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure To Delete?')
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successful')
                        const remaining = orders.filter(service => service._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }
    return (
        <div className='container pb-4'>
        <h2 className='text-center p-4'>My Bookings</h2>
        <table class="table table-dark table-striped table-hover">
        <thead>
        <tr>
  
  <th scope="col">Image</th>
  <th scope="col">Tour</th>
  <th scope="col">Action</th>
        </tr>
             </thead>
        {
            orders.map(order => <tbody>
   <tr>
  <td><img width='30%' src={order.img} alt="" className="rounded-3" /></td>
  <td>{order.tour}</td>
  <td><button className='btn btn-danger' onClick={() => handleDelete(order._id)}>Cancel</button></td>
 
</tr>
</tbody>

                   
 )
        } </table>
    </div>
);
};


export default MyOrders;