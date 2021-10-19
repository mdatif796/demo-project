import React, {useState} from "react"
import "./login.css"
import { useHistory } from "react-router-dom"

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useHistory();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
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
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={credentials.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div><button type="submit" className="button">Submit</button></div>
            </form>
            <div>or</div>
            <button onClick={()=>{history.push('/')}} className="button">
          Sign Up
        </button>
        </div>
    )
}

export default Login
