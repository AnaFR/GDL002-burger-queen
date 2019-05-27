import React from 'react';
import ReactDOM from 'react-dom';// DOM
import './index.css';// import format
import App from './App';// importa la aplicacion desde un .app
import * as serviceWorker from './serviceWorker';//you can work offline// simula datos de manera local// los gaurda de manera local// cuando regresa el internet eso datos se envian al servidor para ser almacenados

ReactDOM.render(<App />, document.getElementById('root'));// libreria enfocada al navegador
// root es el div de html// ejecuta serviceWorker
// importas una especia de html en js app 
// render pintar la interfaz en pantalla






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
