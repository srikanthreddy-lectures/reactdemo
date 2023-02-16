import {React, useState} from 'react'
import axios from "axios";
import Cookies from "universal-cookie";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);


const handleSubmit = (e) => {
  // prevent the form from refreshing the whole page
   e.preventDefault();
  // make a popup alert showing the "submitted" text
   // make the API call

   const configuration = {
    method: "post",
    url: "http://localhost:4000/user/login",
    data: {
      email,
      password,
    },
  };

   axios(configuration)
   .then((result) => {
     setLogin(true);
     cookies.set("TOKEN", result.data.error, {
       path: "/",
     });
     
   }).then(()=>{
      // redirect user to the auth page
     window.location.href= "/admin";
   })
   .catch((error) => {
     console.log(error);

   });
  //alert("Submited");
}

// set configurations
const cookies = new Cookies();

  
  return (
    <div className='container'>
    <form onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
  </div>
  <button type="submit"  className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
    {/* display success message */}
    {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
</form>

<img src='/images/react_icon.png' alt="react logo" height='200px' width='200px' />
<img src='/images/test.jpeg' alt="react logo" height='200px' width='200px' />

</div>
  );
}

export default Login;