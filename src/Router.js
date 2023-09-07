import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";
import Login from "./components/Login";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  // so the logic of checking the cookie would occur here.
  // with JWT,
  return cookies["loggedIn"] ? true : false;
  //   return true;
};

// Write ProtectedRoute function here

const ProtectedRoute = (props) => {
  //   console.log(props);
  const { component: Component, ...rest } = props;

  // rest pattern isn't doing anything here, but I don't feel like deleting it.
  // perhaps I'll need this later on for some reason

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute component={Home} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/car/:id" element={<Car />} />
    </Routes>
  );
};

export default Router;
