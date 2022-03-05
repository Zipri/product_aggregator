import React from 'react';
import {Radio} from "antd";
import s from "./GroceryStore.module.css"
import 'antd/dist/antd.css';

const ProductFilter = (props) => {
    let id = 0;
  const onChange = e => {
    props.findByCategory(e.target.value)
  };
    return <div className={s.productFilter}>
        <Radio.Group buttonStyle="solid" onChange={onChange}>
            <Radio.Button value={"all"} className={s.radioButtons}>
                Всё
            </Radio.Button>
            {props.categories.map(item => {
                id += 1;
                return <Radio.Button value={item} className={s.radioButtons}>
                    {item}
                </Radio.Button>
            })}
        </Radio.Group>
    </div>
};

export default ProductFilter;