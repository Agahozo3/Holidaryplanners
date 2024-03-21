import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'

// Login.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from '../Context/AppContext';
function Login() {
  const navigate = useNavigate();
  const { loginMutation } = useStateContext()
  const [loading,setloading]=useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { isPending: loginLoading } = loginMutation;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    loginMutation.mutate(formData)

    //   try {
    //     const response = await fetch("https://holiday-api-zj3a.onrender.com/api/v1/auth/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     if (response.ok) {
    //       // Login successful
    //       navigate("/");
    //       alert('login successfully')
    //     } else {
    //       // Login failed, show an alert with the error message
    //       // const responseData = await response.json();
    //       // window.alert("Login Error: " + responseData.error);
    //       alert('invalid credentials')

    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     window.alert("An error occurred while logging in.");
    //   }
  };
  
  return (
    <div className="containers__form">
      <div className="login__form">
        <h3>Login</h3>
        <p>
          Doesn't have an account yet?
          <Link to="/signup" style={{ color: "#c29d59" }}>
            Sign up
          </Link>
        </p>
        <form action="" method="post">
          <div className="email">
            <label htmlFor="Email address">Email Address</label><br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
            /><br />
          </div>
          <div className="password2">
            <div className="password1">
              <label htmlFor="Enter 6 character or more">Password</label>
              <a href="" className='password' style={{ color: '#c29d59' }}>forgot password</a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter 6 characters or more"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="remember">Remember me</label>
          </div>
        </form>
        <button className='sec-btn' onClick={handleSubmit} style={{width:380,marginTop:10,paddingTop:20}}>
        
          {loading?<p>loading...</p>:<p>login</p>}
        </button>
        <p className="txt">Or login With</p>
        <div className="alt-login">
          <div className="facebook"><FcGoogle /> Google</div>
          <div className="google"><FaFacebookF /> Facebook</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
