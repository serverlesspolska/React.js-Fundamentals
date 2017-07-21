import React from 'react'

export default class AppProfile extends React.Component {
    constructor(props) {
        super(props);
        this.setEmptyStateWithoutReload()
        this.handleName = this.handleName.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleHobby = this.handleHobby.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleName(e) {
        this.setState({name: e.target.value})
    }

    handleBio(e) {
        this.setState({bio: e.target.value})
    }

    handleHobby(e) {
        this.setState({hobby: e.target.value})
    }
    handleAge(e) {
        this.setState({age: e.target.value})
    }
    submitForm(e) {
        let newProfile = {
            name: this.state.name,
            bio: this.state.bio,
            age: this.state.age,
            hobbies: [this.state.hobby]
        }
        this.props.addUser(newProfile)
        this.setEmptyStateWithoutReload()
    }

    setEmptyStateWithoutReload() {
        this.state = {
            name: '',
            age: '',
            bio: '',
            hobby: ''
        }
    }

    render() {
        return (
            <div>
                <p>Add a new profile</p>
                <input onChange={this.handleName} value={this.state.name}/>
                <input onChange={this.handleAge} value={this.state.age}/>
                <input onChange={this.handleBio} value={this.state.bio}/>
                <input onChange={this.handleHobby} value={this.state.hobby}/>
                <button onClick={this.submitForm}>Add</button>
            </div>
        )
    }
}