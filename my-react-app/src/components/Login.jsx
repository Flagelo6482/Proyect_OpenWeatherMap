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
  // Para validar si enviamos datos o no
  const [registrando, setRegistrando] = useState(false);

  // 
  const functAutenticacion = async (e) => {
    e.preventDefault(); //Para que la pagina no se carge automaticamente
    const correo = e.target.email.value;        //Capturamos los valores con los id del form
    const contraseña = e.target.password.value; //Capturamos los valores con los id del form

    // Si registrando es True creamos un email y password con la funcion de firebase para que lo almacene lo usamos para crear un nuevo usuario con los valores en los parametros pasados
    if (registrando) {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
    }
    else {
      try {
        try {
          // Para autenticar a un usuario si existe o no
          await signInWithEmailAndPassword(auth, correo, contraseña);
        } catch (error) {
          // En caso las credenciales esten incorrectas al autenticar ya sea el correo o contraseña
          alert("Credenciales incorrectas.");
        }
      } catch (error) {
        // Condicion que aplicamos para que tenga como minimo 8 caracteres 
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
            {/* Vamos a enviar a la funcion de functAutenticacion los datos de los inputs */}
            <form onSubmit={functAutenticacion}>
              <input type="text" placeholder="Ingrese correo electronico" id="email" className="caja"/>
              <br />
              <input type="password" placeholder="Ingrese contraseña" id="password" className="caja"/>
              <br />
              <br />
              {/* Boton para iniciar sesion, si registrando tiene un valor o es 'true' mostraremos 'Registrate' en caso contrario 'Inicar sesion' */}
              <button className="btn_form_1">{registrando ? "Registrate" : "Inicia sesion"}</button>
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
