import React from 'react';
import s from "./Preloader.module.css"

const Preloader = () =>
    <div className={s.block}>
        <div className={s.inside}>
            <div className={s.ldsHourglass}></div>
        </div>
    </div>

export default Preloader;