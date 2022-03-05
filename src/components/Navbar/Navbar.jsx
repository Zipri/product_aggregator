import React from 'react';
import {NavLink} from "react-router-dom";
import {Menu} from "antd";
import s from './Navbar.module.css';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

const Item = (props) => <div>
    <NavLink to={`/${props.url}`}>
        {props.name}
    </NavLink>
</div>

const Navbar = (props) => <Menu mode="inline">
    <SubMenu title="Магазины">
        <Menu.Item key="1"><Item url="marketA" name="Магазин №1"/></Menu.Item>
        <Menu.Item key="2"><Item url="marketB" name="Магазин №2"/></Menu.Item>
    </SubMenu>
    <Menu.Item key="3"><Item url="products" name="Все продукты"/></Menu.Item>
    <Menu.Item key="4"><Item url="shoppingBasket" name="Корзина"/></Menu.Item>
    <Menu.Item key="5"><Item url="favoriteProducts" name="Избранные продукты"/></Menu.Item>
    <Menu.Item key="6"><Item url="notes" name="Заметки"/></Menu.Item>
    {/*<div>{props.notes.map(note => <div>{note.text}</div>)}</div>*/}
    {/*TODO разберись ты с Notes*/}
</Menu>

export default Navbar;