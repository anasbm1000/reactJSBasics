import React, { Component } from 'react';
import '../App.css';

class Login extends React.Component {
    state = {
        username : "",
        password : ""
    }

    content=event=>{
        console.log("typing...")
        console.log(this.state.username)
        console.log(event.target.value)
        // this.setState({firstname:event.target.value})
        this.setState({
            [event.target.name]:event.target.value
        })
    }

  

    submission=()=>{
        console.log("logged in")
        console.log(this.state)
    }
    render() {
        return (
            <form action="" method="post" className='App-header'>
                
                <table>
                    
                    <tr>
                        <th>Username</th>
                        <td><input type="text" name='username' value={this.state.username} onChange={this.content} /></td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td><input type="password" name='password' value={this.state.password} onChange={this.content} /></td>
                    </tr>
                    <tr>
                        <th></th>
                        <th><button type='button' onClick={this.submission}>Login</button></th>
                    </tr>
                </table>
            </form>
        );
    }
}

export default Login;
