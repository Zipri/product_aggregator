import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import {Context} from "../../firebase/firebase";

import s from './Header.module.css';


const Header = (props) => {
    let [logo, setLogo] = useState("🍞")
    const navigate = useNavigate()
    const {auth} = useContext(Context)

    const redirect = () => navigate("/login")

    const handleOut = () => {
        auth.signOut()
        redirect()
    }

    const changeLogo = () => {
        switch (logo) {
            case "🍞":
                return setLogo("🥑")
            case "🥑":
                return setLogo("🍉")
            case "🍉":
                return setLogo("🍔")
            case "🍔":
                return setLogo("🌯")
            case "🌯":
                return setLogo("🍒")
            case "🍒":
                return setLogo("🍤")
            case "🍤":
                return setLogo("🍕")
            case "🍕":
                return setLogo("🍦")
            default:
                return setLogo("🍞")
        }
    };

    return <div className={s.header}>
        <NavLink to={"/"}>
            <div className={s.logo} onClick={changeLogo}>
                Product Aggregator <a>{logo}</a>
            </div>
        </NavLink>
        {props.user
            ? <div className={s.login}>
                <a className={s.userName}>
                    {props.user.displayName ? props.user.displayName : props.user.email}
                </a>
                <button className={s.exitButton}
                        onClick={handleOut}>Выйти
                </button>
            </div>
            : <div className={s.login}>
                <button className={s.loginButton}
                        onClick={redirect}>Войти
                </button>
            </div>}
    </div>
};

export default Header;
