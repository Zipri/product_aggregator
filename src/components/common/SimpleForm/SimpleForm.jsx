import React, {useState} from 'react';
import {Button, Input} from "antd";
import s from './SimpleForm.module.css';

const SimpleForm = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = () => props.handleClick(email, password)

    return <div className={s.form}>
        <Input type="email"
               className={s.myInput}
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Введите e-mail"/>
        {props.registration && <Input type="password"
                                      className={s.myInput}
                                      value={password}
                                      placeholder="Введите пароль"/>}
        <Input type="password"
               className={s.myInput}
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Введите пароль"/>
        <Button type="primary" onClick={signIn} className={s.button}>
            {props.title}
        </Button>
    </div>
};

export default SimpleForm;