import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import {Context} from "../../firebase/firebase";

import s from './Header.module.css';


const Header = (props) => {
    let [logo, setLogo] = useState("🍞")
    const navigate = useNavigate()
    const {auth} = useContext(Context)

    const handleOut = () => {
        auth.signOut()
    }

    const redirect = () => navigate("/login")

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
            default:
                return setLogo("🍞")
        }
    };

    return <div className={s.header}>
        <NavLink to={"/"}>
            <div className={s.logo}>
                Product Aggregator <a onClick={changeLogo}>{logo}</a>
            </div>
        </NavLink>
        <div className={s.login}>
            {props.user
                ? <div>
                    {props.user.email}
                    <button className={s.exitButton}
                            onClick={handleOut}>Выйти</button>
                </div>
                : <div>
                    <button className={s.loginButton}
                            onClick={redirect}>Войти</button>
                </div>}
        </div>
    </div>
};

export default Header;
