import React from "react";
//import { AuthProvider } from "./Controllers/authController";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Views/Pages/login";
import Register from "./Views/Pages/register";
import Home from "./Views/Pages/home";
import Admin from "./Views/Pages/admin";

function App() {
  return (
    <Router>
      {/*<AuthProvider>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<></>} />
      </Routes>
      {/*</AuthProvider>*/}
    </Router>
  );
}

export default App;
