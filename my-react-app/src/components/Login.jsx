/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import imgLogin from "./imgs/login.jpg";
import "../assets/Css/Login.css";
import appFirebase from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Navbar from "./Navbar";



const auth = getAuth(appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando) {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
    } else {
      try {
        try {
          await signInWithEmailAndPassword(auth, correo, contraseña);
        } catch (error) {
          alert("Credenciales incorrectas.");
        }
      } catch (error) {
        alert("Asegurese que la contraseña tenga más de 8 caracteres.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="loginC">
        {/* CONTENEDOR 1 */}
        <div className="cont_1">
          {/* FORMULARIO PARA INICIAR O REGISTRARSE */}
          <div className="cont_1_form">
            <h2>Bienvenido a tu aplicación de Clima favorita! ⛈️🌤️</h2>
            <form onSubmit={functAutenticacion}>
              <input
                type="text"
                placeholder="Ingrese correo electronico"
                id="email"
                className="caja"
              />
              <br />
              <input
                type="password"
                placeholder="Ingrese contraseña"
                id="password"
                className="caja"
              />
              <br />
              <br />
              {/* Boton para iniciar sesion */}
              <button className="btn_form_1">
                {registrando ? "Registrate" : "Inicia sesion"}
              </button>
            </form>
          </div>
          {/* Boton para INICIAR SESION o REGISTRARSE */}
          <div className="cont_2_form">
            <h4>
              {registrando ? "Si tienes una cuenta!" : "¿No tienes una cuenta?"}
              <button onClick={() => setRegistrando(!registrando)}>
                {registrando ? "Inicia sesion" : "Registrate"}
              </button>
            </h4>
          </div>
        </div>

        {/* CONTENEDOR 2 IMAGEN */}
        <div className="cont_2">
          <img src={imgLogin} alt="" className="loginImg" />
        </div>
      </div>
    </>
  );
};

export default Login;
