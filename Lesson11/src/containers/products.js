import {connect} from 'react-redux'
import Products from "../components/products";
import constants from "../constants";

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick(id) {
            dispatch({
                type: constants.SHOPPING_CART_ADD,
                payload: {id}
            })
        }
    }
}

//curried function https://www.sitepoint.com/currying-in-functional-javascript/
let ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer