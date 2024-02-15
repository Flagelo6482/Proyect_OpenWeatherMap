/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import '../assets/Css/Form.css';


// Incluimos el parametro "newLocation" para enviar la ciudad y adjuntarlo con la url
const Form = ({newLocation}) => {
    // Variable de estado que hara referencia a la ciudad que buscaremos 'city'
    const [city, setCity] = useState("");

    // Tiene como parametro la ciudad del input 
    const onSubmit = (e) => {
        e.preventDefault();
        if(city === "" || !city) return;

        // Si añadimos una ciudad llamamos a "newLocation" con el parametro de la ciudad
        newLocation(city);
    }

    return (

        <div className="container">
            {/* Cuando se actualize se ejecutara una función 'onSubmit' */}
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    {/* Evento 'onChange' para recoger la información que emos escrito dentro del campo modificando la funcion de setCity pasando el valor quie tiene el campo */}
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default Form