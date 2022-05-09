import React, {useEffect, useState} from 'react';
import {Button, Radio, Select, Tooltip} from "antd";
import s from "./GroceryStore.module.css"
import 'antd/dist/antd.css';
import {Option} from "antd/es/mentions";

const ProductFilter = (props) => {
    let id = 0;
    const onChange = e => {
        props.findByCategory(e.target.value)
    };

    const handleChange = (value) => {
        props.getOrder(value)
    }



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

        <div className={s.sort}>
            <div className={s.sortText}>Сортировать по</div>
            <Select value={props.order} style={{ width: 180 }} onChange={handleChange}>
                <Option value="Title">Названию</Option>
                <Option value="Price">Цене</Option>
                <Option value="Category">Категории</Option>
            </Select>
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