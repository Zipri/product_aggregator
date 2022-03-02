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
            <Item url="marketA" name="Market A"/>
            <Item url="marketB" name="Market B"/>
            <Item url="products" name="Products"/>
            <Item url="shoppingBasket" name="Shopping basket"/>
            <Item url="notes" name="Notes"/>
            {/*<div>{props.notes.map(note => <div>{note.text}</div>)}</div>*/}
        {/*TODO разберись ты с Notes*/}
        </nav>
    );
}

export default Navbar;