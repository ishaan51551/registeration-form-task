import React, { useState } from 'react';
import '../App.css'
import { Link, useHistory } from 'react-router-dom';


const Signup = () => {

  const history = useHistory();
  const [user, setUser] = useState({
    Name: "", email: "", phone: "", work: "", password: "", cPassword: ""
  });

  let name, value;
  const handleInputChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });

  }

  const PostData = async (e) => {
    e.preventDefault();
    const { Name, email, phone, work, password, cPassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name, email, phone, work, password, cPassword
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registeration");
      console.log("Invalid registeration");
    }
    else {
      window.alert("Successful Registeration");
      console.log("Successful registeration");
      history.push("/login");
    }

  }
  return (
    <div className='container mt-5'>

      <div className="form">
        <form method='POST' className='register-form' id="register-form">

          <div className="form-body">
            <div className="Name">
              <label className="form__label" for="Name"> Name </label>
              <input autoComplete='off' name="Name" id="Name" className="form__input" type="text" value={user.Name} onChange={handleInputChange} placeholder="Name" />
            </div>
            <div className="email">
              <label className="form__label" for="email">Email </label>
              <input autoComplete='off' type="email" name="email" id="email" className="form__input" value={user.email} onChange={handleInputChange} placeholder="Email" />
            </div>
            <div className="phone">
              <label className="form__label" for="phone">Phone no. </label>
              <input autoComplete='off' type="phone" name="phone" id="phone" className="form__input" value={user.phone} onChange={handleInputChange} placeholder=" Your phone" />
            </div>
            <div className="work">
              <label className="form__label" for="work">work</label>
              <input autoComplete='off' type="text" name="work" id="work" className="form__input" value={user.work} onChange={handleInputChange} placeholder="work" />
            </div>
            <div className="password">
              <label className="form__label" for="password">Password </label>
              <input autoComplete='off' className="form__input" name="password" type="password" id="password" value={user.password} onChange={handleInputChange} placeholder="your Password" />
            </div>
            <div className="cPassword">
              <label className="form__label" for="cPassword">Confirm Password </label>
              <input className="form__input" type="password" name="cPassword" id="cPassword" value={user.cPassword} onChange={handleInputChange} placeholder="Confirm Password" />
            </div>
          </div>
        </form>

        <div className="footer form-button ">
          <input type="submit" name="signup" id="signup" className="form-submit" class="btn" value="Register"
            onClick={PostData}
          />
        </div>

        <Link to="/login" className='signup-image-link btn btn-primary btn-lg'>I am already register</Link>
      </div>
    </div>
  )
}

export default Signup
