import React, { useState, useEffect } from "react";

const Home = (props) => {
  const host = "http://localhost:5000";
  const initialUser=[];
  const [user, setUser] = useState(initialUser);
  // fetch all user data
  useEffect(() => {
      getUser();
  async function getUser() {
    //  API call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    setUser(json);
  }}, []);
  var data = JSON.parse(localStorage.getItem("name"));
  return (
    <div>
      <h1>Logged in user's data</h1>
        {user.map((data) => <h1>{data.name}</h1>)};
        {data}
    </div>
  )
}

export default Home;