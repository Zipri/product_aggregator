import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from "./redux/store";

import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree(Store);
Store.subscribe(rerenderEntireTree);

reportWebVitals();
