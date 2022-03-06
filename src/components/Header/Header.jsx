import React, {useState} from 'react';
import './Header.css';


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
        <div className="logo">
            Product Aggregator  <div onClick={changeLogo}>{logo}</div>
        </div>
    </div>
};

export default Header;
