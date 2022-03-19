import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './firebase/firebase'

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {auth, Context, firestore, firebaseApp} from "./firebase/firebase";

import './index.css';


ReactDOM.render(<React.StrictMode>

    <BrowserRouter>
        <Context.Provider value={{auth, firestore, firebaseApp}}>
            <Provider store={store}>
                <App/>
            </Provider>
        </Context.Provider>
    </BrowserRouter>

</React.StrictMode>, document.getElementById('root'));


reportWebVitals();
