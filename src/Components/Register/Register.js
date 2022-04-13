import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase/firebase.init"

const Register = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const navigate=useNavigate()
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const handleEmail=(event)=>{
          setEmail(event.target.value)
   
          
      }
      const handlePassword=(event)=>{
          setPassword(event.target.value);

      }
      const handleConfirmPassword=(event)=>{
          setConfirmPassword(event.target.value)

      }
      const handleSubmit=(event)=>{
          event.preventDefault()
        createUserWithEmailAndPassword(email, password)
      }
      if(user){
          navigate("/checkout")
      }
    
      
    return (
        <div className='form-div w-50 mx-auto mt-5 bg-light '>
                 <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmail} className="emailing"  type="email" className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePassword} type="password" className="form-control" required id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input onBlur={handleConfirmPassword} type="password" className="form-control" required id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <div>
      <h5>If you are registered <Link to="/login"><span text-danger>Please Login</span> </Link> </h5>
  </div>
</form>
        </div>
    );
};

export default Register;