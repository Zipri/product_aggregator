import React, {useState} from 'react';
import s from './Products.module.css';
import ProductItem from "../common/ProductItem/ProductItem";


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
            <button onClick={find}>Find</button>
        </div>
        {findProducts.map(product => <ProductItem name={product.name}
                                                  price={product.price}
                                                  number={product.number}
                                                  picture={product.picture}/>)}
    </div>
};

export default Filter;