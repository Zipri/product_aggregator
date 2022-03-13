import productReducer from "./product-reducer";
import shoppingBasketReducer from "./shoppingBasket-reducer";

let Store = {
    _state: {
        products: [
            {
                id: 1,
                market: "Перекрёсток",
                category: "напитки",
                name: "кофе 75г",
                price: 100,
                number: 0,
                picture: "https://resizer.mail.ru/p/87a7420d-e503-5f6f-a0b8-0fcc9dcd1c7a/AAAcBmITt4RjksASpFSQlNRz2oXRZ_ybxZR2u4umnHIJBdOHZXFRQ1T-o4_D1kcHgaqiaVaSZnHDpQL3kPTu8h5WIIY.jpg"
            },
            {
                id: 2,
                market: "Перекрёсток",
                category: "крупы",
                name: "каша 25г",
                price: 40,
                number: 0,
                picture: "https://2recepta.com/recept/molochnaya-ovsyanaya-kasha/molochnaya-ovsyanaya-kasha.jpg"
            },
            {
                id: 3,
                market: "Перекрёсток",
                category: "овощи",
                name: "картошка 1кг",
                price: 400,
                number: 0,
                picture: "https://chudo-povar.com/images/kak-i-skolko-varit-kartoshku-v-mundire-1.jpg"
            },
            {
                id: 4,
                market: "Перекрёсток",
                category: "крупы",
                name: "рис 1кг",
                price: 1600,
                number: 0,
                picture: "https://resizer.mail.ru/p/03d541a3-dbf9-5c28-bd9b-64d902b5c178/AAAcXVK3j_IiWKe1T5gOpXoRFCy37HMtzEKcIOpraDK-iTXTmBgr9-g_qKWLcLpmljfozcK4MhkUgpEQlc72f56Zads.jpg"
            },
            {
                id: 5,
                market: "Перекрёсток",
                category: "бобовые",
                name: "фасоль 150г",
                price: 80,
                number: 0,
                picture: "https://onco.rehab/upload/medialibrary/f81/f8113b443d73c21e5d21cd413d17217c.jpg"
            },
            {
                id: 6,
                market: "Перекрёсток",
                category: "мясо",
                name: "кебаб 200г",
                price: 234,
                number: 0,
                picture: "https://halal-spb.ru/sites/default/files/styles/large/public/4a8de43f0eca710623090ddc96b40225.jpg?itok=6v8ScFeP"
            },
            {
                id: 7,
                market: "Пятёрочка",
                category: "напитки",
                name: "кофе 100г",
                price: 110,
                number: 0,
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzpg7oMcu4MTuRBCvncZewg22F_KjKsn90Q&usqp=CAU"
            },
            {
                id: 8,
                market: "Пятёрочка",
                category: "крупы",
                name: "каша 25г",
                price: 42,
                number: 0,
                picture: "https://2d-recept.com/wp-content/uploads/2020/09/tykvennaya-kasha-s-molokom.jpg"
            },
            {
                id: 9,
                market: "Пятёрочка",
                category: "овощи",
                name: "картошка 1кг",
                price: 430,
                number: 0,
                picture: "https://mirnov.ru/images/photos/small/article632205.jpg"
            },
            {
                id: 10,
                market: "Пятёрочка",
                category: "крупы",
                name: "рис 1кг",
                price: 1640,
                number: 0,
                picture: "https://1gai.ru/uploads/posts/2020-02/1582277487_bez-imeni-5.jpg"
            },
            {
                id: 11,
                market: "Пятёрочка",
                category: "бобовые",
                name: "горох 150г",
                price: 15,
                number: 0,
                picture: "https://resizer.mail.ru/p/452abd08-85fb-5f1e-9c1d-eab2cd5eb7b2/AAAcgZOPT598tz9SNOsKxpBg0M49gkNgPASkW2P11AcBMd5YW6UWSAEVqRfU6Cc8Q24uF-f-TORew4MPUyxXGE7wf78.jpg"
            },
            {
                id: 12,
                market: "Пятёрочка",
                category: "мясо",
                name: "шаверма 300г",
                price: 224,
                number: 0,
                picture: "https://www.gastronom.ru/binfiles/images/20160211/b9e1a59d.jpg"
            },
            {
                id: 13,
                market: "Пятёрочка",
                category: "закуски",
                name: "чипсы 100г",
                price: 214,
                number: 0,
                picture: "https://lenta.gcdn.co/globalassets/1/-/29/022/64/283626_5.png?preset=fulllossywhite"
            },
            {
                id: 14,
                market: "Пятёрочка",
                category: "ягоды",
                name: "арбуз 1кг",
                price: 114,
                number: 0,
                picture: "https://www.prismamarket.ru/upload/iblock/0a3/2000669800001.jpg"
            },
            {
                id: 15,
                market: "Пятёрочка",
                category: "закуски",
                name: "сухарики 30г",
                price: 24,
                number: 0,
                picture: "https://goods.kaypu.com/photo/4f457a903a6885806eabf3c8.jpg"
            },
        ],
        shoppingBasket: [],
        favoriteProducts: [],
        notes: [ {id: 1, text: "первая заметка"}, {id: 2, text: "вторая заметка"}, {id: 3, text: "третья заметка"}, {id: 4, text: "четвертая заметка"}, ]
    },
    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    getProducts() {
        return this._state.products
    },
    getPerekrostokProducts() {
        return this._state.products.filter(product => product.market === "Перекрёсток")
    },
    getPyatorochkaProducts() {
        return this._state.products.filter(product => product.market === "Пятёрочка")
    },
    getShoppingBasket() {
        return this._state.shoppingBasket
    },
    getFavoriteProducts() {
        return this._state.favoriteProducts
    },
    getNotes() {
        return this._state.notes
    },

    addItem(newItem) {
        this._state.shoppingBasket.push({id: this._state.shoppingBasket.length, item: newItem})
        //this._state.shoppingBasket = [...this._state.shoppingBasket, {id: 1, item: newItem}]
        //TODO видимо диспатч не работал по той же причине, по которой не работает [...this._state.shoppingBasket, {id: 1, item: newItem}]
    },
    deleteItem(newId) {
        this._state.shoppingBasket = this._state.shoppingBasket.filter(
            item => item.id !== newId
        )
    },
    addNewFavorite(newItem) {
        this._state.favoriteProducts.push({id: this._state.favoriteProducts.length, item: newItem})
    },

    dispatch(action) {
        this._state.products = productReducer(this._state.products, action)
        this._state.shoppingBasket = shoppingBasketReducer(this._state.shoppingBasket, action)

        this._callSubscriber(this._state)
    },
}

export default Store