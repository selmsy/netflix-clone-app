
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Account from "./components/pages/Account";


function App() {
  return (
    <>
    <AuthContextProvider>

    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>

    </AuthContextProvider>
     
    </>
  );
}

export default App;
