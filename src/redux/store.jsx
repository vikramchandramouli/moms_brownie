import { addToCartReducer } from "./reducers/reducers";
import { combineReducers, createStore } from "redux";


const rootReducer = combineReducers({
    cartData:addToCartReducer
})


export const store=createStore(rootReducer)