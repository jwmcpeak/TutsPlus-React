import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ReactNews from './ReactNews';
import JavaScriptNews from './JavaScriptNews';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react" element={<ReactNews />} />
            <Route path="/javascript" element={<JavaScriptNews />} />

        </Routes>
    </Router>
    // </React.StrictMode>
);