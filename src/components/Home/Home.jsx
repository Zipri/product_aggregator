import React from 'react';
import s from "./Home.module.css"

const Home = (props) => {
    return <div className={s.Block}>
        <div className={s.inside}>
            <h1>Добро пожаловать в Product Aggregator</h1>
            <text>
                Данное веб-приложение является частью программной системы для сравнения стоимости продовольственной корзины у разных поставщиков.
            </text>
        </div>
    </div>
};

export default Home;