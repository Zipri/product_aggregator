import React from 'react';
import s from './FavoriteProducts.module..css';
import {Table} from "antd";

const FavoriteProducts = (props) => {
    const items = props.favorites.map(item => item.item)
    console.log(items)
    const columns = [
        {
            title: 'Магазин',
            dataIndex: 'market',
            key: 'market',
        },
        {
            title: 'Категория',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Количество',
            dataIndex: 'number',
            key: 'number',
        },
    ];
    return <div className={s.favoriteProducts}>
        <Table columns={columns} dataSource={items}/>
    </div>
};

export default FavoriteProducts;