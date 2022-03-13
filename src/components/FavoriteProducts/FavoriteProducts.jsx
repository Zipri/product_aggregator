import React from 'react';
import s from './FavoriteProducts.module..css';
import {Table} from "antd";

const FavoriteProducts = (props) => {
    const items = props.favorites.map(item => item.item)
    const columns = [
        {
            title: 'Магазин',
            dataIndex: 'market',
            key: 'market',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.market.length - b.market.length,
        },
        {
            title: 'Категория',
            dataIndex: 'category',
            key: 'category',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.category.length - b.category.length,
        },
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
    ]
    const onChange = (sorter) => {console.log('params', sorter )}
    return <div className={s.favoriteProducts}>
        <Table columns={columns} dataSource={items} onChange={onChange}/>
    </div>
};

export default FavoriteProducts;