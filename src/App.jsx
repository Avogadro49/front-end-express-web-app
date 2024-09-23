// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Bootcamps from "./components/bootcamps/Bootcamps";
import Courses from "./components/courses/Courses";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./pages/homePage/HomePage";

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
