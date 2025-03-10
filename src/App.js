import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from './pages/Getstarted';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Myskills from './pages/Myskills';
import Exploreskills from './pages/Exploreskills';
import Workshop from './pages/Workshop';
import Community from './pages/Community';
import Message from './pages/Message';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

function App() {
  return (
      <BrowserRouter>
              <Routes>
                {/* <Route path="/" element={<GetStarted />} /> */}
                      <Route path="/" element={<GetStarted />} />
                      <Route path="/Signup" element={<Signup />} />
                      <Route path="/Login" element={<Login />} />
                      <Route path="/Home" element={<Home />} />
                      <Route path="/Myskills" element={<Myskills />} />
                      <Route path="/Exploreskills" element={<Exploreskills />} />
                      <Route path="/Community" element={<Community />} />
                      <Route path="/Workshop" element={<Workshop />} />
                      <Route path="/Message" element={<Message />} />
                      <Route path="/Settings" element={<Settings />} />
                      <Route path="/profile" element={<Profile />} />
                </Routes>
              </BrowserRouter>


  );
}

export default App;
