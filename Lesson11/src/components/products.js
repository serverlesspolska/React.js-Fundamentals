import React from "react";
import Product from "./product";

let Products = ({products, handleClick}) => (
    <section>
        <h2>Our products</h2>
        <section>
            {products.map(product =>
                <Product key={product.id}
                         {...product}
                         handleClick={handleClick} label="Add to cart"/>)}
        </section>
    </section>
)

export default Products;