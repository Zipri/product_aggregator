import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Store from "./redux/store";


ReactDOM.render(
    <React.StrictMode>
        <App store={Store}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
