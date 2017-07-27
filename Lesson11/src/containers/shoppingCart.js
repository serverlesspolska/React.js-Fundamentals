import {connect} from 'react-redux'
import ShoppingCart from '../components/shoppingCart'
import constants from "../constants";


function getProductsInCart(products,shoppingCart) {
    return products.filter(product=>shoppingCart.includes(product.id))
}

function mapStateToProps(state) {
    return {
        products: getProductsInCart(state.products,state.shoppingCart)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick(id) {
            dispatch({
                type: constants.SHOPPING_CART_REMOVE,
                payload: {id}
            })
        }
    }
}

//curried function https://www.sitepoint.com/currying-in-functional-javascript/
let ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default ShoppingCartContainer