import React, { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  }

  const handleSubmit = () => {
    console.log(email, password);
  }

  return (
    <div className="form">
      <div className="form-body">

        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
        </div>

        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="your Password" />
        </div>

        <div className="footer form-button ">         
          <button onClick={() => handleSubmit()} type="submit" name="signin" id="signin" className="form-submit btn btn-primary" class="btn"><a>Login</a></button>
        </div>

        <Link to="/signup" className='signup-image-link btn btn-primary btn-lg'>create an account</Link>
      </div>
      </div>
      )
}

export default Login
