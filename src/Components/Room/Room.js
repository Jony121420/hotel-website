import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Room.css"

const Room = ({room}) => {
    const {name,Price,img}=room;
    const navigate = useNavigate()
    return (
        <div className='single-room container-fluid'>
         <div className="room-container">
             
           <div className="img-container mt-4">
           <img  src={img} className="img-room" alt="" />
           </div>
           <div className="info mt-5">
           <h3> {name}</h3>
            <h5 className='mt-4'>price: {Price}</h5>
           </div>
           
         </div>
         <div className="card-button ">
            {/* <Link to='/checkout'> <button className=' card-button btn-primary ' >checkout</button></Link> */}
            <button className=' card-button btn-primary 'onClick={()=>navigate("./checkout")} >checkout</button>
         </div>
        
        </div>
    );
};

export default Room;