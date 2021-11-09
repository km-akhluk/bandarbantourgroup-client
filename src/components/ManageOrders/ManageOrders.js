import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
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
            <h2 className='text-center p-4'>Manage All Bookings</h2>
            <table class="table table-dark table-striped table-hover">
            <thead>
    <tr>
      
      <th scope="col">Image</th>
      <th scope="col">Tour</th>
      <th scope="col">Ordered by</th>
      <th scope="col">Address</th>
      <th scope="col">Cancel/Approve</th>
    </tr>
  </thead>
            {
                orders.map(order => <tbody>
       <tr>
      <td><img width='30%' src={order.img} alt="" /></td>
      <td>{order.tour}</td>
      <td>{order.name}</td>
      <td>{order.address}</td>
      <td><button className='btn btn-danger' onClick={() => handleDelete(order._id)}>Cancel</button>  <button className="btn-primary btn">APPROVE </button></td>
     
    </tr>
  </tbody>

                       
     )
            } </table>
        </div>
    );
};

export default ManageOrders;