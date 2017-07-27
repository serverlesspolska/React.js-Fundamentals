import React from "react";
import Product from "./product";

let ShoppingCart = ({products, handleClick}) => (
    <section>
        <h2>Shopping cart</h2>
        <section>
            {products.map(product =>
                <Product key={product.id}
                         {...product}
                         handleClick={handleClick} label='remove from cart'/>)}
        </section>
    </section>
)

export default ShoppingCart;