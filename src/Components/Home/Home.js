import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Room from "../Room/Room"
import "./Home.css"

const Home = () => {
  const [rooms,setRooms]=useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setRooms(data))
  },[])
    return (
        <div className=' row '>
          <div className="container">
          <Carousel></Carousel>
          </div>
        <div className="rooms">
        {
           rooms.map(room=><Room key={room.key} room={room}></Room>)
         }
        </div>
        </div>
    );
};

export default Home;