
import {expect} from 'chai'
import shoppingCart from "../../reducers/shoppingCart";
import constants from "../../constants";
import {describe, it} from "mocha";

describe('shoppingCart reducer', () =>{
    it('can add new products', ()=>{
        expect(
            shoppingCart([],{type: constants.SHOPPING_CART_ADD, payload: {id:22}})
        ).to.eql([22])
    })

    it('can remove products from cart', ()=>{
        let state = []
        state =
            shoppingCart(state,{type: constants.SHOPPING_CART_ADD, payload: {id:22}})

        expect(
            shoppingCart(state,{type: constants.SHOPPING_CART_REMOVE, payload: {id:22}})
        ).to.eql([])
    })
})