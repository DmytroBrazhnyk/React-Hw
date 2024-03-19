import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const setProducts = createAction('SET_PRODUCTS');

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await fetch('/beerList.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    throw error;
    }
});

export const setProductCartModalStatus = createAction('SET_PRODUCT_CART_MODAL_STATUS');