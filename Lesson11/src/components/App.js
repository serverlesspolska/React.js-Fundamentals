import React from 'react';
import Products from "../containers/products";
import ShoppingCart from '../containers/shoppingCart';

//import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome to our shop</h1>
                <Products/>
                <ShoppingCart/>
            </div>
        )
    }
}

export default App;
