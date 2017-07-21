import React from 'react';
import Profile from './Profile'
import AddProfile from './AddProfile'
//require('../../scss/style.scss');


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: []
        };
        this.addUser = this.addUser.bind(this)
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({profiles: data})
            })
    }

    addUser(newProfile){
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    }
    render(){
        let profiles = this.state.profiles.map(profile => {
            return (
                <Profile
                    id={profile.id}
                    name={profile.name}
                    username={profile.username}
                    email={profile.email}
                    website={profile.website}
                    address={profile.address}
                     />
            )
            //hobbies={profile.hobbies}
        });
        return (
            <div>
                {profiles}
                <AddProfile addUser={this.addUser} />
            </div>
        )
    }
}

export default App;
