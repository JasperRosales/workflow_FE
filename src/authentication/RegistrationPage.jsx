import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from 'react';
import UserService from "../service/UserService"; 
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/img/logoWorkflow.png";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const token = localStorage.getItem('token');
      await UserService.register(formData, token);

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPass: '',  
      });
      alert('User Registered Successfully');
      navigate('/auth/login');
    } catch(error){
      console.error('Error registering user:', error);
      alert('An error occured while registering user');
    }
  };  
  

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="row w-100">

        {/* Left side for logo and text */}
        <div className="col-lg-5 col-md-3 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img
              src={logo}
                className="mb-0"
              alt="Workflow Logo"
              style={{ maxWidth: '100px'}}
            />
            <h1>Welcome to Workflow</h1>
            <p className="lead text-muted">Where every job flows. Get into your dream career now!</p>
          </div>
        </div>

        {/* Right side for the login form */}
        <div className="col-lg-6 col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                   name="confirmPass"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={formData.confirmPass}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
              >
                Register
              </button>

              <div className="text-center mb-3">
                <div className="border-bottom border-1" style={{ width: '50%', margin: '0 auto' }}></div>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <a href="#" className="text-decoration-underline small-text">
                    Forgot Password?
                </a>
                <span className="mx-2 ">or</span>
                <Link to="/login" className="text-decoration-underline mx-2 fs-6">
                  Already Registered?
                </Link>
            </div>

            </form>
          </div>
            
        </div>
        <p className="text-center text-muted  mb-0" style={{ position: 'absolute', bottom: '10px', width: '95%' }}>
        &copy; 2025 NCNL. All rights reserved.
      </p>
      </div>
   
    </div>
    
  );
}

export default LoginForm;
    