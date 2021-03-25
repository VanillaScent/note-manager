import React, { Component, Fragment } from 'react';
import store from '../../../redux/store';
import {login} from '../../../redux/actions/auth';


export class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
        };

        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }    


    onSubmitForm = (e) => {
        console.log(this.state);

        store.dispatch(login(this.state.username, this.state.password));
    }

    render(){
        return (<Fragment>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <div className="form-group">
                    <label>Username</label>
                    <input 
                    type="text" name="username" 
                    placeholder="Username.." 
                    value={this.state.username} onChange={this.onInputchange}
                />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" 
                    placeholder="Password" 
                    value={this.state.password} onChange={this.onInputchange}
                />
                </div>
                <button className="btn btn-info" onClick={this.onSubmitForm}>Login</button>
        </div>
        </Fragment>);
    }
}
