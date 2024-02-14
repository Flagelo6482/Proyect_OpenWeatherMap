/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import Navbar2 from "./Navbar2";
import WeatherPanel from "./WeatherPanel";
import Footer from "./Footer";

// const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
  return (
    <>
      <Navbar2 />
      <WeatherPanel />
      <Footer />
    </>
  );
};

export default Home;
