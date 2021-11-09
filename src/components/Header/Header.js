import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
  const { user, logOut } = useAuth()
  console.log(user);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to='/home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to='/tours'>Packages</Link>
              </li>
              <li className="nav-item">
              {user.email&&  <Link className="nav-link active " aria-current="page" to='/addTour'>Post Packages</Link>}
       
              </li>
              <li className="nav-item">
              {user.email&&  <Link className="nav-link active " aria-current="page" to='/myOrders'>My Bookings</Link>}
              </li>
              <li className="nav-item">
              {user.email&&  <Link className="nav-link active " aria-current="page" to='/manageOrders'>Admin</Link>}
              </li>

            </ul>
        
            <div className="d-flex">
              
         
              <div className="login-btns">
                 { user?.email ?
                 <button className='btn-danger btn logout-btn' onClick={logOut}>Log Out</button>:
                 <Link to='/login'>
                 <button className="me-5 btn btn-primary" role="button">Sign In </button>
               </Link>}
             
              </div>
              <h5 className='m-3 user-name '> <img src={user.photoURL} width='15%' alt="" /> {user.displayName || user.name || user.email}</h5>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;