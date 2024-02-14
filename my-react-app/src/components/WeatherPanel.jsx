/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
  
    // URL de la api
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?&appid=b7036d8d2beeded1120c6fd4e8d49228&lang=es";
    // Nombre de la ciudad
    let cityUrl = "&q=";
    // URL de la prediccion de las siguientes horas
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&appid=b7036d8d2beeded1120c6fd4e8d49228&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);            //Para visualizar la tarjeta con informacion
    const [location, setLocation] = useState("");       //Para que se comunique con el formulario

    // Funcion para llamar a la API
    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        // Tiempo real
        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false); //Controla la tarjeta con informacion
        })

        // Forecast
        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false); //Controla la tarjeta con informacion
        })
    }

    return (
        <React.Fragment>

        <Form
            newLocation = {getLocation}
        />

        <Card 
            showData = {show}
            loadingData = {loading}
            weather = {weather}
            forecast = {forecast}
        />

        </React.Fragment>
    );
}

export default WeatherPanel