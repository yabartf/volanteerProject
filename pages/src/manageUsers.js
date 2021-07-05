import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class UsersList extends Component {
    constructor() {
        super();
        this.state = {
            users: fetch('/allUsers'),
        };
    }

    render() {
        return (
            <div>
                {this.state.users.array.forEach(element => {
                    <li>
                        {element}
                    </li>    
                })}
                
            </div>
        );
    }


}

render(<UsersList />, document.getElementById('root'));
