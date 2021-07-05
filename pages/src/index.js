import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import UsersList from './manageUsers'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            Mail: "",
            Password: ""
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.loginSubmit.bind(this)}>
                    <label>
                        Mail:
                        <input type="text" value={this.state.Mail} /* onChange={this.handleChange} */ />
                    </label>
                    <label>
                        Password:
                        <input type="text" value={this.state.Password} /* onChange={this.handleChange} */ />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );
    }

loginSubmit() {
    alert('sisu is right!')

}
}
render(<UsersList />, document.getElementById('root'));
//render(<Login />, document.getElementById('root'));
