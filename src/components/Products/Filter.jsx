import React, {useState} from 'react';
import ProductItem from "../common/ProductItem/ProductItem";
import {Button} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import s from './Products.module.css';
import Search from "antd/es/input/Search";


const Filter = (props) => {
    return <div className={s.filter}>
        <div className={s.filterItem}>
            <Search placeholder="Поиск по названию"
                    onSearch={props.findByName}
                    enterButton/>
            {props.findProductsName.map(product => <ProductItem name={product.name}
                                                          price={product.price}
                                                          number={product.number}
                                                          picture={product.picture}/>)}
        </div>
        <div className={s.filterItem}>
            <Search placeholder="Поиск по категории"
                    onSearch={props.findByCategory}
                    enterButton/>
            {props.findProductsCategory.map(product => <ProductItem name={product.name}
                                                              price={product.price}
                                                              number={product.number}
                                                              picture={product.picture}/>)}
        </div>
    </div>
};

export default Filter;