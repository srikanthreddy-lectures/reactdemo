import React from 'react';
import { Routes, Route } from "react-router-dom";
import AuthComponent from "./Components/AuthComponent";
import FreeComponent from "./Components/FreeComponent";
import Login from './Components/Login/Login';
import Navbar from './Components/Login/Navbar'
import { ProtectedRoute } from './ProtectedRoute';
import  Dashboard  from './Components/Admin/Dashboard'
import Logout from './Components/Common/Logout';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<><Navbar/><Login/></>} />
      <Route exact path="/free" element={<FreeComponent/>} />
      <Route exact path="/logout" element={<Logout/>} />

      <Route exact 
             path="/auth" 
             element=
                  {
                    <ProtectedRoute>
                      <AuthComponent/>
                    </ProtectedRoute>
                  } 
      />
      <Route exact 
             path="/admin" 
             element=
                  {
                    <ProtectedRoute>
                      <Dashboard/>
                    </ProtectedRoute>
                  } 
      /> 
    </Routes>
  );
}

export default App;
