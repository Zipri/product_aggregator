import React, {useContext, useState} from 'react';
import {Button, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {Context} from "../../../firebase/firebase";
import s from './SimpleForm.module.css';

const SimpleForm = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {auth, firebaseApp} = useContext(Context)

    const signInEmail = () => props.handleEmail(email, password)

    const handleLoginGoogle = async () => {
        const provider = new firebaseApp.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
        navigate("/products")
    }

    return <div className={s.form}>
        <div className={s.myInput}>
            <Input type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Введите e-mail"/>
        </div>
        {props.registration && < div className={s.myInput}>< Input type="password"
                                                                   value={password}
                                                                   placeholder="Введите пароль"/></div>}
        <div className={s.myInput}>
            <Input type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="Введите пароль"/>
        </div>
        <Button type="primary" onClick={signInEmail} className={s.button}>
            {props.title}
        </Button>
        {props.registration
            ? <Button type="primary" onClick={handleLoginGoogle} className={s.button}>
                Зарегистрироваться с помощью Google
            </Button>
            : <Button type="primary" onClick={handleLoginGoogle} className={s.button}>
                Войти с помощью Google
            </Button>}
    </div>
};

export default SimpleForm;