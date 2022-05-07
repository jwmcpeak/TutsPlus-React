import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WeatherApp from './WeatherApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <WeatherApp />
    // </React.StrictMode>
);