import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Manager from "./pages/Manager";
import Staff from "./pages/Staff";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/manager/:userId" element={<Manager/>} />
      <Route path="/staff/:userId" element={<Staff/>} />
    </Routes>
  );
}

export default App;
