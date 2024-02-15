/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Spinner from './Spinner'

const Card = ({loadingData, showData, weather, forecast}) => {

    // Creamos la fecha actual para mostrar al cliente
    var today = new Date();                         
    var day = today.getDate();                         //Nos da el dia
    var month = today.getMonth() + 1;                  //Nos da el mes
    var year = today.getFullYear();                    //Nos da el año
    var date = day + '/' + month + '/' + year;         //Concatenamos todos los datos para mostrar la fecha completa

    // Para mostrar el icono en la parte IZQUIERDA DE LA TARJETA
    var url = "";                                      //URL para acceder al icono
    var iconUrl = "";                                  //Variable para concatenar la URL más el icono de dicha ciudad, para acceder al icono de la API

    // Iconos para la parte inferior de la tarjeta
    var iconUrl3 = "";                                 //Icono de prediccion de 3 horas
    var iconUrl6 = "";                                 //Icono de prediccion de 6 horas
    var iconUrl9 = "";                                 //Icono de prediccion de 9 horas

    // ALMACENAMOS LAS HORAS Y FECHAS CON PREDICCIONES
    var forecastDate3 = "";                            //Accedemos a la fecha
    var forecastDate6 = "";                            //
    var forecastDate9 = "";                            //

    // Si loadingData es true devolvemos el spinner de carga
    if (loadingData) {
        return <Spinner />
    }

    //Para acceder a la url y obtener el icono, solo vamos a obtener esa visualizacion solo si showdata es true
    if (showData){
        url = "http://openweathermap.org/img/w/";           
        iconUrl = url + weather.weather[0].icon + ".png";   //Obtenemos el icono 

        // ICONOS DE PREDICCION
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png"; //Acedemos a la informacion de los iconos con prediccion
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png"; //Acedemos a la informacion de los iconos con prediccion
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png"; //Acedemos a la informacion de los iconos con prediccion

        // CAMBIAMOS LOS FORMATOS DE LAS HORAS Y FECHAS CORRECTAMENTE
        // Accedemos a las fechas, colocando primero la fecha luego la hora
        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5">

            {
                // Con showData controlamos si se visualizara la tarjeta o no, si es true mostramos la Tarjeta con la informacion sino enviaremos un texto que no encontramos los datos
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                {/* LADO IZQUIERDO */}
                                <div className="col-md-4">
                                    {/* Llamamos a la variable 'weahter' obteniendo el nombre de la ciudad para mostrarlo en pantalla */}
                                    <h3 className="card-title">{weather.name}</h3>
                                    {/* Establecemos la fecha actual */}
                                    <p className="card-date">{date}</p>
                                    {/* Temperatura en grados kelvin, usamos toFixed para que no nos retorne muchos decimales con el tope de 1 decimal */}
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    {/* Usando el icono, accedemos al icono para mostrar */}
                                    <p className="card-desc"><img src={iconUrl} alt="icon" />{weather.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/10517344/pexels-photo-10517344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=".." className="img-fluid rounded-start"/>
                                </div>
                                {/* LADO DERECHO */}
                                <div className="col-md-8">
                                    {/* LADO SUPERIOR */}
                                    <div className="card-body text-start mt-2">
                                        {/* Mostramos las temperaturas en tiempo real */}
                                        <h5 className="card-tex">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-tex">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-tex">Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-tex">Humedad: {weather.main.humidity}%</h5>
                                        <h5 className="card-tex">Velocidad del viento: {weather.wind.speed}m/s</h5>
                                    </div>
                                    <hr />
                                    {/* LADO INFERIOR Datos de las proximas horas */}
                                    <div className="row mt-4">
                                        {/* Datos de las proximas 3 horas */}
                                        <div className="col">
                                            {/* Fecha y la hora al final */}
                                            <p>{forecastDate3}h</p>
                                            {/* Icono obtenido */}
                                            <p className="description"><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                            {/* Temperatura pronosticada */}
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        {/* Datos de las proximas 6 horas */}
                                        <div className="col">
                                            <p>{forecastDate6}h</p>
                                            <p className="description"><img src={iconUrl6} alt="icon" />{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        {/* Datos de las proximas 9 horas */}
                                        <div className="col">
                                            <p>{forecastDate9}h</p>
                                            <p className="description"><img src={iconUrl9} alt="icon" />{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className="text-light">Sin datos</h2>
                )
            }


        </div>
    )
}

export default Card