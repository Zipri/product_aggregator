import React, {useState} from 'react';
import s from './Products.module.css';


const Filter = (props) => {

    let [findProducts, setFindProducts] = useState(props.products)
    let findElement = React.createRef()

    const find = () => {
        let text = findElement.current.value
        setFindProducts(props.products.filter(product => product.name === text))
    }

    return <div>
        <div>
            <textarea ref={findElement} />
            <button onClick={find}>Find</button>
        </div>
        {findProducts.map(item => <div>{item.name}</div>)}
    </div>
};

export default Filter;