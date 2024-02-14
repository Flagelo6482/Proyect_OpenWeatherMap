import { useState } from "react";
/* eslint-disable no-unused-vars */
import "./App.css";
// Importando los modulos de Firebase
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

// Importar los componentes
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [usuario, setUsuario] = useState(null);

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
      {usuario ? <Home  correoUsuario={usuario.email}/> : <Login/>}
    </div>
  );
}

export default App;
