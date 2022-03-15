import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {setUser} from "../../redux/auth-reducer";
import SimpleForm from "../common/SimpleForm/SimpleForm";

import s from "./LoginForm.module.css"

const RegistrationForm = (props) => {
    const navigate = useNavigate()

    const handleRegistration = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                props.setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                })
                navigate("/products")
            })
            .catch(() => alert("Упс, что-то пошло не так"))
    }

    return <div className={s.Block}>
        <div className={s.inside}>
            <h1>Зарегистироваться</h1>
            <SimpleForm title="Зарегистрироваться"
                        handleClick={handleRegistration}
                        registration={true}/>
            <h1>или <NavLink to="/login">войти в свой профиль</NavLink></h1>
        </div>
    </div>
};

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setUser})(RegistrationForm);
