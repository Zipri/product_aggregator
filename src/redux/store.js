import productReducer from "./product-reducer";

let Store = {
    _state: {
        products: [
            {id: 1, market: "perekrostok",name: "кофе", price: 100, number: 100, picture: "https://resizer.mail.ru/p/87a7420d-e503-5f6f-a0b8-0fcc9dcd1c7a/AAAcBmITt4RjksASpFSQlNRz2oXRZ_ybxZR2u4umnHIJBdOHZXFRQ1T-o4_D1kcHgaqiaVaSZnHDpQL3kPTu8h5WIIY.jpg"},
            {id: 2, market: "perekrostok",name: "каша", price: 40, number: 100, picture: "https://2recepta.com/recept/molochnaya-ovsyanaya-kasha/molochnaya-ovsyanaya-kasha.jpg"},
            {id: 3, market: "perekrostok",name: "картошка", price: 400, number: 100, picture: "https://chudo-povar.com/images/kak-i-skolko-varit-kartoshku-v-mundire-1.jpg"},
            {id: 4, market: "perekrostok",name: "рис", price: 1600, number: 100, picture: "https://resizer.mail.ru/p/03d541a3-dbf9-5c28-bd9b-64d902b5c178/AAAcXVK3j_IiWKe1T5gOpXoRFCy37HMtzEKcIOpraDK-iTXTmBgr9-g_qKWLcLpmljfozcK4MhkUgpEQlc72f56Zads.jpg"},
            {id: 5, market: "perekrostok",name: "фасоль", price: 80, number: 100, picture: "https://onco.rehab/upload/medialibrary/f81/f8113b443d73c21e5d21cd413d17217c.jpg"},
            {id: 6, market: "perekrostok",name: "кебаб", price: 234, number: 100, picture: "https://halal-spb.ru/sites/default/files/styles/large/public/4a8de43f0eca710623090ddc96b40225.jpg?itok=6v8ScFeP"},
            {id: 7, market: "pyatorochka",name: "кофе", price: 100, number: 100,picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzpg7oMcu4MTuRBCvncZewg22F_KjKsn90Q&usqp=CAU"},
            {id: 8, market: "pyatorochka",name: "каша", price: 40, number: 100,picture: "https://2d-recept.com/wp-content/uploads/2020/09/tykvennaya-kasha-s-molokom.jpg"},
            {id: 9, market: "pyatorochka",name: "картошка", price: 400, number: 100,picture: "https://mirnov.ru/images/photos/small/article632205.jpg"},
            {id: 10, market: "pyatorochka",name: "рис", price: 1600, number: 100,picture: "https://1gai.ru/uploads/posts/2020-02/1582277487_bez-imeni-5.jpg"},
            {id: 11, market: "pyatorochka",name: "горох", price: 10, number: 1110,picture: "https://resizer.mail.ru/p/452abd08-85fb-5f1e-9c1d-eab2cd5eb7b2/AAAcgZOPT598tz9SNOsKxpBg0M49gkNgPASkW2P11AcBMd5YW6UWSAEVqRfU6Cc8Q24uF-f-TORew4MPUyxXGE7wf78.jpg"},
            {id: 12, market: "pyatorochka",name: "шаверма", price: 2234, number: 99,picture: "https://www.gastronom.ru/binfiles/images/20160211/b9e1a59d.jpg"}
        ]
    },
    _callSubscriber() {
    },

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
      return this._state.products.filter(product => product.market === "perekrostok")
    },
    getPyatorochkaProducts() {
      return this._state.products.filter(product => product.market === "pyatorochka")
    },

    dispatch(action) {
        this._state = productReducer(this._state, action)

        this._callSubscriber(this._state)
    },
}

export default Store