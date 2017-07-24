import React from 'react';
import ReactDOM from "react-dom";
//import {Route,Router, hashHistory} from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App, {Home,About} from "./components/App"

export class Home2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Welcome to home page</p>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <p> the app</p>
        <App/>
        <Router>
            <div>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </Router>
        <hr/>
        <p>footer</p>
    </div>
    , document.getElementById('root'));
