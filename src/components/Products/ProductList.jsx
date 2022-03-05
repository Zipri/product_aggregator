import React from 'react';
import ProductItem from "../common/ProductItem/ProductItem";
import s from './Products.module.css';
import {Collapse} from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

const Market = (props) => <div>
    {props.products.map(product => {
        if (product.market === props.marketName) {
            return <ProductItem name={product.name}
                                price={product.price}
                                number={product.number}
                                picture={product.picture}
                                category={product.category}
                                setFindInputName={props.setFindInputName}
                                setFindInputCategory={props.setFindInputCategory}
                                flagList={true}/>
        }
    })}
</div>

const ProductList = (props) => {
    return (<div className={s.productList}>
            <Collapse>
                <CollapsePanel header="Магазин №1" key="1">
                    <Market marketName="pyatorochka"
                            products={props.products}
                            setFindInputName={props.setFindInputName}
                            setFindInputCategory={props.setFindInputCategory}/>
                </CollapsePanel>
                <CollapsePanel header="Магазин №2" key="2">
                    <Market marketName="perekrostok"
                            products={props.products}
                            setFindInputName={props.setFindInputName}
                            setFindInputCategory={props.setFindInputCategory}/>
                </CollapsePanel>
            </Collapse>
        </div>
    );
};

export default ProductList;
