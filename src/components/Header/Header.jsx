import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {getAuth} from "firebase/auth";

import {removeUser} from "../../redux/auth-reducer";
import s from './Header.module.css';


const Header = (props) => {
    let [logo, setLogo] = useState("🍞")
    const navigate = useNavigate()
    const auth = getAuth()

    const handleOut = () => {
        auth.signOut().then(props.removeUser())
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
            {props.isAuth.isAuth
                ? <div>
                    {props.isAuth.email}
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

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, {removeUser})(Header);
