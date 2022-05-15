import React from 'react';
import {Button, Table} from "antd";
import s from './FavoriteProducts.module..css';



const FavoriteProducts = (props) => {
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
            dataIndex: 'title',
            key: 'title',
            defaultSortOrder: 'descend',
        },
        {
            title: 'Цена (руб.)',
            dataIndex: 'price',
            key: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Удалить',
            dataIndex: 'favorite',
            key: 'favorite',
            render: (text, record) => {
                return <Button
                    className={s.delButton}
                    onClick={() => props.deleteFromFavorite(record.article)}>
                    ✖
                </Button>
            }
        },
    ]
    const onChange = (sorter) => {
        console.log('params', sorter)
    }
    return <div className={s.favoriteProducts}>
        <Table columns={columns} dataSource={props.favorites} onChange={onChange}/>
    </div>
};

export default FavoriteProducts;