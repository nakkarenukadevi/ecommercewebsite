import { configurStore } from "react-redux";
import cartReducer from "./cartSlice";
const Store = configurStore({
  reducer: {
    cart: cartReducer,
  },
});
export default Store;
