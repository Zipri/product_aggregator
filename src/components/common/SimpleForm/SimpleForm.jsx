import React, {useState} from 'react';

import s from './SimpleForm.module.css';

const SimpleForm = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = () => props.handleClick(email, password)

    return <div className={s.form}>
        <input type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Введите e-mail"/>
        <input type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Введите пароль"/>
        <button onClick={signIn}>
            {props.title}
        </button>
    </div>
};

export default SimpleForm;