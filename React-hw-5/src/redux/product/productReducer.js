import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts,setProductCartModalStatus } from './productActions';

const initialState = {
    products: [],
    status: 'idle', 
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload.map((product) => ({
                    ...product,
                    isCartModalVisible: false, 
                }));
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(setProductCartModalStatus, (state, action) => {
                const { productId, isCartModalVisible } = action.payload;
                const productIndex = state.products.findIndex(product => product.id === productId);
                
                if (productIndex !== -1) {
                    state.products[productIndex].isCartModalVisible = isCartModalVisible;
                }
            });
    },
});

export default productSlice.reducer;
