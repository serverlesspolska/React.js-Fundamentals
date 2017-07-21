import React from 'react'

let Profile = props => (
    <div key={props.id}>
        <h2>{props.name}</h2>
        <p>
            Username: {props.username} with an email {props.email} and website {props.website}
        </p>
        {typeof props.address !== 'undefined' &&
        <h3>Address</h3>}
        {typeof props.address !== 'undefined' &&
        <ul>
        <li>{props.address.street}</li>
            <li>{props.address.suite}</li>
            <li>{props.address.city}</li>
        </ul>
        }
        {typeof props.address === 'undefined' &&
        <p>address not given</p>
    }
    </div>
)
//{props.hobbies.map(hobby => <li>{hobby}</li>)}
export default Profile