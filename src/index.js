import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Store from "./redux/store";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App store={Store}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
