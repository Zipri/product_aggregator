import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import {setUser} from "../../redux/auth-reducer";
import SimpleForm from "../common/SimpleForm/SimpleForm";

import s from "./LoginForm.module.css"

const LoginForm = (props) => {
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
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
            <h1>Войдите в свой профиль:</h1>
            <SimpleForm title="Войти"
                        handleClick={handleLogin}/>
            <h1>или <NavLink to="/registration">зарегистрируйтесь</NavLink></h1>
        </div>
    </div>
};

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setUser})(LoginForm);