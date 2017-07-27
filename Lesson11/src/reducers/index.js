import {combineReducers} from 'redux'
import products from "./products";
import shoppingCart from "./shoppingCart";


let reducer = combineReducers({products, shoppingCart})

export default reducer;