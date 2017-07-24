import React from 'react';
import ReactDOM from "react-dom";
import {incrementActions} from './actions/app-actions'
import {TodoStore} from './stores/count-store'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: TodoStore.getCount()
        }
        this.increment = this.increment.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange)
    }

    componentWillUnmount() {
        TodoStore.removeListener(this.onChange)
    }

    onChange() {
        this.setState({count: TodoStore.getCount()})
    }

    increment() {
        incrementActions.incrementCount()
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increase count</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
