import React, {useState} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    let [logo, setLogo] = useState("🍞")

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

    return <div className="header">

        <NavLink to={"/"}>
            <div className="logo">
                Product Aggregator <div onClick={changeLogo}>{logo}</div>
            </div>
        </NavLink>
    </div>
};

export default Header;
