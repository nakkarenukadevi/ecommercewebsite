import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cart: (state, action) => {},
  },
});
export const { cart } = cartSlice.actions;
export default cartSlice.reducer;
