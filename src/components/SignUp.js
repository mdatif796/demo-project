import React, { useState } from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    username: "",
    mobile: "",
    address: "",
  });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, username, mobile, address } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        username,
        mobile,
        address,
      }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save auth-token and redirect to ("/")
      localStorage.setItem("token", json.authToken);
      history.push("/user");
    } else {
      history.push("/");
    }
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        ></input>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Your Username"
          onChange={handleChange}
          required
        ></input>
        <input
          type="number"
          id="mobile"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          minLength={10}
          maxLength={10}
          required
        ></input>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your Address"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your Password"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          id="cpassword"
          name="cpassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        ></input>
        <button type="submit" onChange={handleChange} className="button">
          Sign Up
        </button>
      </form>
      <button onClick={history.push('/login')} className="button">
          Log In
        </button>
    </div>
  );
};

export default SignUp;
