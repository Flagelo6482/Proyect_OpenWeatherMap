/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
// Importando los modulos de Firebase
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth"; //El getAuth es servicio de autenticacion y el onAuthStateChanged sirve para detectar el estado de la autenticacion
const auth = getAuth(appFirebase); //Usamos el modulo para usar la autenticacion a traves de appFirebase

// Importar los componentes
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  // 
  const [usuario, setUsuario] = useState(null);

  // Usamos la funcion que traimos de firebase para conocer el ESTADO DE AUTENTICACION, agregando la autenticacion 'auth' y tambien creamos un parametro para verificar si estamos logeados o registrados vamos a guardar la informacion del usuario en la variable setUsuario
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    }
    else {
      setUsuario(null);
    }
  });

  return (
    <div>
      {/* Si la variable de usuario tiene un valor/true entonces vamos al componente de Home ya que nos logeamos/registramos en caso contrario vamos a la pagina principal a registrarnos */}
      {usuario ? <Home/> : <Login/>}
    </div>
  );
}

export default App;
