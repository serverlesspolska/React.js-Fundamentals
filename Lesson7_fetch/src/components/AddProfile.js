import React from 'react'

export default class AppProfile extends React.Component {
    constructor(props) {
        super(props);
        this.setEmptyStateWithoutReload()
        this.handleName = this.handleName.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleWebsite = this.handleWebsite.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleName(e) {
        this.setState({name: e.target.value})
    }

    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handleWebsite(e) {
        this.setState({website: e.target.value})
    }

    submitForm(e) {
        let newProfile = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            website: this.state.website
        }
        this.props.addUser(newProfile)
        this.setEmptyStateWithoutReload()
    }

    setEmptyStateWithoutReload() {
        this.state = {
            name: '',
            username: '',
            email: '',
            website: ''
        }
    }

    render() {
        return (
            <div>
                <p>Add a new profile</p>
                Name: <input onChange={this.handleName} value={this.state.name}/> <br/>
                User name: <input onChange={this.handleUsername} value={this.state.username}/><br/>
                Email: <input onChange={this.handleEmail} value={this.state.email}/><br/>
                Website: <input onChange={this.handleWebsite} value={this.state.website}/><br/>
                <button onClick={this.submitForm}>Add</button>
            </div>
        )
    }
}