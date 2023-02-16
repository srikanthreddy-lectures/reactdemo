import React from 'react';
import { Routes, Route } from "react-router-dom";
import AuthComponent from "./Components/AuthComponent";
import FreeComponent from "./Components/FreeComponent";
import Login from './Components/Login/Login';
import Navbar from './Components/Login/Navbar'
import ProtectedRoutes from "./Components/ProtectedRoutes";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<><Navbar/><Login/></>} />
      <Route exact path="/free" element={<FreeComponent/>} />
      <Route exact 
             path="/auth" 
             element=
                  {
                    <ProtectedRoutes>
                      <AuthComponent/>
                    </ProtectedRoutes>
                  } 
      />
    </Routes>
  );
}

export default App;
