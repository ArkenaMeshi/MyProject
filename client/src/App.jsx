import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";

import CreatePost from './components/CreatePost';
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import HousesList from "./components/HousesList";
import Details from "./components/Details";
import About from "./components/About";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/create" element={<CreatePost />} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<LogIn/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/list" element={<HousesList/>} />
          <Route exact path="/details/:id" element={<Details/>} />
          <Route exact path="/about" element={<About/>} />
       

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
