import React from "react";

let Product = ({id, name, cost, handleClick, label}) => (
    <div>
        {name} ${cost}
        <button onClick={() => handleClick(id)}>{label}</button>
    </div>
)

export default Product