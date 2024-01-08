import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    cartItem: [],
  },
  reducers: {
    inistialdata: (state, action) => {
      state.data = action.payload;
    },
    addCart: (state, action) => {
      state.cartItem.push(action.payload);
    },
  },
});
export const { inistialdata, addCart } = cartSlice.actions;
export default cartSlice.reducer;
