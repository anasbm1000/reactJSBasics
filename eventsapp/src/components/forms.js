import React, { Component } from 'react';
import '../App.css';

class Forms extends React.Component {

    state={
        firstname:"",
        lastname:"",
        email : "",
        phone : "",
        gender : "",
        dob : "",
        city : "",
        state : "",
        country : "",
        pincode : "",
        username : "",
        password : ""
    }

    content=event=>{
        console.log("typing...")
        console.log(this.state.firstname)
        console.log(event.target.value)
        // this.setState({firstname:event.target.value})
        this.setState({
            [event.target.name]:event.target.value
        })
    }

  

    submission=()=>{
        console.log("registered")
        console.log(this.state)
    }
    render() {
        return (
            
            <form action="" method="post" className='App-header'>
                
                <table>
                    {/* <tr>
                        <th></th>
                        <th><h1>Registration</h1></th>
                    </tr> */}
                    <tr>
                        <th>First Name</th>
                        <td><input type="text" name='firstname'  value={this.state.firstname} onChange={this.content} placeholder='First Name' /></td>
                        <th>Last Name</th>
                        <td><input type="text" name='lastname' value={this.state.lastname} onChange={this.content} placeholder='Last Name' /></td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td><input type="email" name='email' value={this.state.email} onChange={this.content} placeholder='Email' /></td>
                        <th>Phone</th>
                        <td><input type="number" name='phone' value={this.state.phone} onChange={this.content} placeholder='Phone' /></td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td><input type="radio" name='gender' value={this.state.gender} onChange={this.content} />Male
                        <input type="radio" name='gender' value={this.state.gender} onChange={this.content} />Female</td>
                        <th>Date of Birth</th>
                        <td><input type="date" name='dob' value={this.state.dob} onChange={this.content} /></td>
                    </tr>
                    
                    <tr>
                        <th>City</th>
                        <td><input type="text" name='city' value={this.state.city} onChange={this.content} /></td>
                        <th>State</th>
                        <td><input type="text" name='state' value={this.state.state} onChange={this.content} /></td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td><input type="text" name='country' value={this.state.country} onChange={this.content} /></td>
                        <th>Pincode</th>
                        <td><input type="number" name='pincode' value={this.state.pincode} onChange={this.content} /></td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td><input type="text" name='username' value={this.state.username} onChange={this.content} /></td>
                        <th>Password</th>
                        <td><input type="password" name='password' value={this.state.password} onChange={this.content} /></td>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><button type='button' onClick={this.submission}>Register</button></th>
                    </tr>
                </table>
            </form>
        );
    }
}

export default Forms;

