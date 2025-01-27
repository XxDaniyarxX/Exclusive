import { configureStore } from '@reduxjs/toolkit';
import CountReducer from '../Redux/count/countSlice';
import ColorReducer from '../Redux/count/colorSlice';
import usersReducer from './User/UserSlice';
import baykotFetch from './Baykot/baykotSlice';
import smartphoneReducer from './Smartphones/SmartphoneSlice';
import Category from './Category/Category'
import HomeFetch from './HomeProduct/HomeProduct';
import ProductReducer from './Products/ProductSlice'
import WishlistReducer from './Wish/WishSlice';
import basketReducer from './Basket/BasketSlice'
const myStore = configureStore({
    reducer: {
        check: CountReducer,
        color: ColorReducer,    
        list: usersReducer,
        baykot: baykotFetch,
        smartphone: smartphoneReducer,
        Categorylist: Category,
        HomeFetch: HomeFetch,
        products: ProductReducer,
        wishlist: WishlistReducer,
        basket: basketReducer,
        
    },
});

export default myStore;