/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/Css/Navbar2.css";
import img from "./imgs/logo.png";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import WeatherPanel from "./WeatherPanel";

const auth = getAuth(appFirebase);

const Navbar2 = () => {
  return (
    <nav className="">
      <div className="nav_bar">
        <div className="nav_bar_2">
          <h2>Bienvenido a</h2><img src={img} alt="img" className="logo_api" />
        </div>
        <div>
          <div className="btn_end">
            <button onClick={() => signOut(auth)} className="btn btn-primary input-group-text">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
