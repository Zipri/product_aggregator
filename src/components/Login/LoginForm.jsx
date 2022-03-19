import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import SimpleForm from "../common/SimpleForm/SimpleForm";
import {Context} from "../../firebase/firebase";

import s from "./LoginForm.module.css"

const LoginForm = (props) => {
    const navigate = useNavigate()
    const {auth} = useContext(Context)

    const handleLoginEmail = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
        navigate("/products")
    }

    return <div className={s.Block}>
        <div className={s.inside}>
            <h1>Войдите в свой профиль:</h1>
            <SimpleForm title="Войти"
                        handleEmail={handleLoginEmail}/>
            <h1>или <NavLink to="/registration">зарегистрируйтесь</NavLink></h1>
        </div>
    </div>
};

export default LoginForm;