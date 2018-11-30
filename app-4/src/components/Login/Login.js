import React, {Component} from 'react';
import './Login.css';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            login: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onClick(){
        alert(`Username: ${this.state.login} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input name = "login" onChange={this.onChange} type="text" value={this.state.login}></input>
                <input name = "password" onChange={this.onChange} type="text" value={this.state.password}></input>
                <button onClick={this.onClick}>Login</button>
            </div>
        )
    }
}

export default Login;