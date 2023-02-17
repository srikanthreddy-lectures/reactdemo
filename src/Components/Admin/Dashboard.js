import React, { useEffect, useState } from "react";
import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");
console.log(token)

export default function Dashboard() {

// set an initial state for the message we will receive after the API call
const [message, setMessage] = useState("");

// useEffect automatically executes once the page is fully loaded
useEffect(() => {
  // set configurations for the API call here
  const configuration = {
    method: "get",
    url: "https://cb18-144-24-129-185.in.ngrok.io/auth-endpoint",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // make the API call
  axios(configuration)
    .then((result) => {
      // assign the message in our result to the message we initialized above
      setMessage(result.data.message);
    })
    .catch((error) => {
      //error = new Error();
      console.log(error)
    });
}, []);



  return (
    <>
     <Navbar/>
    <Sidebar/>
    <Main message={message}/> 
    </>
  );
}