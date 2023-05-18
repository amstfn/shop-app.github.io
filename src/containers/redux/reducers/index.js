import { combineReducers } from "redux"
import { productReducer } from "./productReducer";
import { productReducerDetail } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: productReducerDetail
});