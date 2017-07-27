
import constants from "../constants";

let initialState = []

export default function shoppingCart(state=initialState,action) {
    switch (action.type){
        case constants.SHOPPING_CART_ADD:
            return [...state,action.payload.id]
        case constants.SHOPPING_CART_REMOVE:
            return state.filter(id=> id!== action.payload.id)
        default:
            return state
    }

}