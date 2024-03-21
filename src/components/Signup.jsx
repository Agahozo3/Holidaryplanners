import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../Context/AppContext";

function Signup() {
  const navigate = useNavigate();
  const { SignupMutation } = useStateContext(); // Call useStateContext inside the component
const [loading,setloading]=useState(false)
  const [data, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    fullNames: "",
    location:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
setloading(true)
    SignupMutation.mutate(data);

    // You can remove the try-catch block here

    // navigate("/login"); // Remove this line as it's handled in the onSuccess callback
  };

  return (
    <section className="section">
      <div className="container__signup">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
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
            <label htmlFor="password">Location</label>
            <input
              type="location"
              id="location"
              name="location"
              required
              placeholder="Enter location"
              onChange={handleInputChange}
            />
          </div>
        <button className="sec-btn" type="submit" style={{marginTop:20,borderRadius:20,width:140}}>
            {loading?<p>loading...</p>:<p>signup</p>}
          </button>
        </form>
        {/* Remove the error state handling here */}
        <p className="text__signup">
          Already have an account<Link to="/login" className="signup__link">
            Login in
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
