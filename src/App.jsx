// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Bootcamps from "./components/Bootcamps";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bootcamps" element={<Bootcamps />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
