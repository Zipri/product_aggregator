import React, {useState} from 'react';
import ProductItem from "../common/ProductItem/ProductItem";
import {Button} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import s from './Products.module.css';


const Filter = (props) => {

    let [findProducts, setFindProducts] = useState([])
    let findElement = React.createRef()

    const find = () => {
        let text = findElement.current.value
        setFindProducts(props.products.filter(product => product.name === text))
    }

    return <div>
        <div>
            <textarea ref={findElement}/>
            <Button type="primary" icon={<SearchOutlined/>} onClick={find}>Найти</Button>
        </div>
        {findProducts.map(product => <ProductItem name={product.name}
                                                  price={product.price}
                                                  number={product.number}
                                                  picture={product.picture}/>)}
    </div>
};

export default Filter;