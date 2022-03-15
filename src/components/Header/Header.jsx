import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {Button} from "antd";
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
                    <Button type="primary"
                            className={s.exitButton}
                            onClick={handleOut}>Выйти</Button>
                </div>
                : <div>
                    <Button type="primary"
                            className={s.exitButton}
                            onClick={redirect}>Войти</Button>
                </div>}
        </div>
    </div>
};

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, {removeUser})(Header);
