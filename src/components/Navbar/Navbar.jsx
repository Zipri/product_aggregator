import React from 'react';

import './Navbar.css';
import {NavLink} from "react-router-dom";

const Item = (props) => <div>
    <NavLink to={`/${props.url}`}>
        {props.name}
    </NavLink>
</div>

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <Item url="pyatorochka-items" name="Pyatorochka Items"/>
            <Item url="perekrostok-items" name="Perekrostok Items"/>
            <Item url="products" name="Products"/>
            <Item url="notes" name="Notes"/>
        </nav>
    );
}

export default Navbar;