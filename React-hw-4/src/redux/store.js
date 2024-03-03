import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/productReducer'; 


import { reducer as yourSliceReducer } from './slice';

const store = configureStore({
    reducer: {
        products: productReducer,
        yourSlice: yourSliceReducer,
    },
});

export default store;