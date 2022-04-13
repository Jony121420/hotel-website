import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';


const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
 
  const  location = useLocation();
  const from = location.state?.from?.pathname || "/";
 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
    const handleEmail=(event)=>{
        setEmail(event.target.value)
 
        
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);

    }
  
    const handleSubmit=(event)=>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if(user){
      navigate(from, { replace: true })
    }
  

    return (
        <div className='form-div w-50 mx-auto mt-5 border h-75 p-5 bg-light'>
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <div>
      <h5>If you first time here <Link to="/register"><span text-danger>Please register</span> </Link> </h5>
  </div>
</form>
        </div>
    );
};

export default Login;