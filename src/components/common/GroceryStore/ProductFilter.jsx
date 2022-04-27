import React from 'react';
import {Button, Radio, Tooltip} from "antd";
import s from "./GroceryStore.module.css"
import 'antd/dist/antd.css';

const ProductFilter = (props) => {
    let id = 0;
    const onChange = e => {
        props.findByCategory(e.target.value)
    };

    return <div className={s.productFilter}>
        <div className={s.settings}>
            Количество столбцов:
            <div className={s.setButtons}>
                <Button type="primary"
                        className={s.decButton}
                        onClick={() => props.setCol(props.columns - 1)}>Уменьшить</Button>
                <Button type="primary"
                        className={s.incButton}
                        onClick={() => props.setCol(props.columns + 1)}>Увеличить</Button>
            </div>
        </div>
        <Radio.Group buttonStyle="solid" onChange={onChange}>
            <Radio.Button value={"all"} className={s.radioButtons}>
                Все категории
            </Radio.Button>
            {props.categories.map(item => {
                id += 1;
                return <Tooltip title={item} color='blue'>
                    <Radio.Button value={item} className={s.radioButtons}>
                        <div className={s.text}>
                            {item}
                        </div>
                    </Radio.Button>
                </Tooltip>
            })}
        </Radio.Group>
    </div>
};

export default ProductFilter;