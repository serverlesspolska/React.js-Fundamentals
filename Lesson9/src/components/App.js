import React from 'react';
//import ReactDOM from 'react-dom';


export class Home extends React.Component {
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

export class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>About us</p>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App component</h1>
            </div>
        )
    }
}

export default App;
