import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import SimpleForm from "../common/SimpleForm/SimpleForm";
import {Context} from "../../firebase/firebase";

import s from "./LoginForm.module.css"


const RegistrationForm = (props) => {
    const navigate = useNavigate()
    const {auth} = useContext(Context)

    const handleRegistrationEmail = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
        navigate("/products")
    }

    return <div className={s.Block}>
        <div className={s.inside}>
            <h1>Зарегистироваться</h1>
            <SimpleForm title="Зарегистрироваться"
                        handleEmail={handleRegistrationEmail}
                        registration={true}/>
            <h1>или <NavLink to="/login">войти в свой профиль</NavLink></h1>
        </div>
    </div>
};

export default RegistrationForm;
