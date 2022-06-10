import { combineReducers } from "redux";
import {productReducer, selectedProductReducer, cartProductReducer} from "./productReducer";

const reducer = combineReducers({
 allProducts: productReducer,
 product:  selectedProductReducer,
 cartProduct: cartProductReducer,
});

export default reducer;
