import React, { useState } from 'react'
import './SignupForm.css'
// import axios from 'axios'
import { useStateContext } from "../Context/AppContext";




const SignupForm = ({openForm}) => {
const { SignupMutation } = useStateContext(); 
    
const [load,Setload]=useState(false)
const [data, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    fullNames: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };
const handleSubmit=async(e)=>{
    e.preventDefault();

    Setload(()=>true)
     try {
        

         SignupMutation.mutate(data);
         console.log('yves');
       
     } catch (error) {
        console.error(error);
        
     }
     Setload(()=>true)
}


  return (
    <div class="signup-form1">
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Add new user</h1>
          <div className="form-group4">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="fullNames"
              required
              placeholder="Enter your full name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              required
              placeholder="Enter your phone number"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Choose a password"
              onChange={handleInputChange}
            />
            </div>
             <div className="form-group4">
            <label htmlFor="Location">Location</label>
            <input
              type="location"
              id="Location"
              name="Location"
              required
              placeholder="enter the location"
              onChange={handleInputChange}
            />
          </div>
          <div className="div" style={{display:"flex",gap:'1rem',marginLeft:'5rem'}}>

          <button className="sec-btn" type="submit" disabled={load} style={{width:120}}>
            {load? "Regitering...": "Register"}
          </button>
          <button className="sec-btn" type="submit" onClick={openForm} style={{width:120}}>
            Cancel
          </button>
          </div>
        </form>
    </div>
    
  )
}

export default SignupForm