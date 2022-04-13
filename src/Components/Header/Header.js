import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css"
import hotel2 from "../../Assets/hotel2.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
 <div className='row nav-border-1'>
            <nav  className="  navbar navbar-expand-lg nav-border navbar-light col-sm-12 col-md-12 container-fluid  ">
  
  <div className="container-fluid nav-menu col-md-12 ">
      <img className="navbar-brand header-img" href="#"  src= {hotel2} alt="" />
   
    <button className="navbar-toggler button " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon span"></span>
    </button>
    <div className="collapse navbar-collapse link-div" id="navbarNav">
      <ul className="navbar-nav  ">
        <Link to="/" className="nav-item links">
          <a className="nav-link text-primary" aria-current="page" href="#">Home</a>
        </Link>
        <Link to="/checkout" className="nav-item links">
          <a className="nav-link  text-primary" href="#">Checkout</a>
        </Link>
        <Link to="/reviews" className="nav-item links">
          <a className="nav-link text-primary" href="#">Reviews</a>
        </Link>
        <Link to="/features" className="nav-item links">
          <a className="nav-link text-primary" href="#">features</a>
        </Link>
        <Link to="/login" className="nav-item links">
          {
            user? <a onClick={logout} className="nav-link text-danger" href="#">Logout</a>:  <a className="nav-link text-primary" href="#">Login</a>
          }
        
        </Link>
        <Link to="/about-us" className="nav-item links">
          <a className="nav-link text-primary" href="#">About-us</a>
        </Link>
        
      </ul>
    </div>
  </div>
</nav>
 </div>
    );
};

export default Header;