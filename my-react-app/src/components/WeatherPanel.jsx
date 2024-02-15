/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
  
    // URL de la api
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?&appid=b7036d8d2beeded1120c6fd4e8d49228&lang=es";
    // Nombre de la ciudad que obtendremos del formulario
    let cityUrl = "&q=";
    // URL de la prediccion de las siguientes horas
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&appid=b7036d8d2beeded1120c6fd4e8d49228&lang=es";

    // Establecemos las variables de estado
    const [weather, setWeather] = useState([]);         //Variable que guarda la respuesta de la api para el tiempo actual
    const [forecast, setForecast] = useState([]);       //Prediccion de las siguientes horas 
    const [loading, setLoading] = useState(false);      //Spinner para visualizar  mientras carga la busqueda
    const [show, setShow] = useState(false);            //Para visualizar la tarjeta con informacion
    const [location, setLocation] = useState("");       //Para que se comunique con el formulario y lo usaremos dentro de este


    // Funcion para llamar a la API
    const getLocation = async(loc) => {
        // Hacemos la llamada para obtener la inforamcion de la API
        setLoading(true);   //Llamamos a la API con formaci
        setLocation(loc);   //Pasamos la ciudad a la funcion

        // TIEMPO REAL
        // Llamamos a la url, luego añadimos la busqueda de ciudad más la localicacion que es la ciudad 'loc'
        urlWeather = urlWeather + cityUrl + loc;

        // Usamos el 'fetch' para la llamada, con el parametro de la url, usando la promesa para obtener la repuesta
        await fetch(urlWeather).then((response) => {
            // Si no tenemos respuesta nos retorna un error
            if(!response.ok) throw {response}
            // Caso contrario nos retorna la respuesta en formato json para procesarlo 
            return response.json();
        }).then((weatherData) => {
            // Establecemos la informacion
            setWeather(weatherData);
        }).catch(error => {
            // 
            setLoading(false);  //
            setShow(false);     //Controla la tarjeta con informacion si hay un error en respuesta no mostramos nada 
        })


        // FORECAST, prediccion de las siguientes horas
        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) => {
            // 
            setForecast(forecastData);

            setLoading(false);  //Si todo iba bien se visualirzara la informacion
            setShow(true);      //Para que visualize la tarjeta con toda la informacion con los datos

        }).catch(error => {
            
            setLoading(false);
            setShow(false); //Controla la tarjeta con informacion
        })
    }

    return (
        <React.Fragment>

        <Form
            // Necesitamos el dato que se encuentra dentro "newLocation" para hacer el llamado a la api y obtener la localicacion
            newLocation = {getLocation}
        />

        <Card 
            //A traves de estas props enviamos la información al componente "Card"
            showData = {show}
            loadingData = {loading}
            weather = {weather}
            forecast = {forecast}
        />

        </React.Fragment>
    );
}

export default WeatherPanel