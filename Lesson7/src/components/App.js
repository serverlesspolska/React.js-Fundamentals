import React from 'react';
import Profile from './Profile'
import AddProfile from './AddProfile'
//require('../../scss/style.scss');


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [
                {
                    name: "Sue",
                    age: 30,
                    bio: 'enjoys long walks',
                    hobbies: ['tv', 'bike']
                },
                {
                    name: "Tom",
                    age: 21,
                    bio: 'enjoy',
                    hobbies: ['ccc', 'ddd']
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
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
                    name={profile.name}
                    age={profile.age}
                    bio={profile.bio}
                    hobbies={profile.hobbies} />
            )
        })
        return (
            <div>
                {profiles}
                <AddProfile addUser={this.addUser} />
            </div>
        )
    }
}

export default App;
