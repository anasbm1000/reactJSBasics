import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Profile extends Component {
    state = {
        name: "",
        age: "",
        gender: "",
        residence: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        submitted: false
    }

    componentDidMount() {
        const profileData = localStorage.getItem('profileData');
        if (profileData) {
            this.setState(JSON.parse(profileData));
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ submitted: true }, () => {
            localStorage.setItem('profileData', JSON.stringify(this.state));
        });
    }

    handleEdit = () => {
        this.setState({ submitted: false });
    }

    render() {
        return (
            <div className="profile-container">
                {!this.state.submitted ? (
                    <form className="profile-form" onSubmit={this.handleSubmit}>
                        <h2>Enter Your Profile Details</h2>
                        <table>
                            <tr>
                                <th>Name</th>
                                <td><input type="text" name="name" placeholder='Enter your name' value={this.state.name} onChange={this.handleChange} required /></td>
                                <th>Age</th>
                                <td><input type="number" name="age" placeholder='Enter your age' value={this.state.age} onChange={this.handleChange} required /></td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td><input type="text" name="gender" placeholder='Enter your gender' value={this.state.gender} onChange={this.handleChange} required /></td>
                                <th>Residence</th>
                                <td><input type="text" name="residence" placeholder='Enter your residence' value={this.state.residence} onChange={this.handleChange} required /></td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td><input type="text" name="phone" placeholder='Enter your phone number' value={this.state.phone} onChange={this.handleChange} required /></td>
                                <th>Email</th>
                                <td><input type="email" name="email" placeholder='Enter your email' value={this.state.email} onChange={this.handleChange} required /></td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td><input type="text" name="city" placeholder='Enter your city' value={this.state.city} onChange={this.handleChange} required /></td>
                                <th>Address</th>
                                <td><input type="text" name="address" placeholder='Enter your address' value={this.state.address} onChange={this.handleChange} required /></td>
                            </tr>
                        </table>
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <div className="profile">
                        <div className="profile-img">
                            <img src="./profile.png" height={100} alt="pp" />
                            <h2>{this.state.name}</h2>
                        </div>
                        <div className="profile-details">
                            <div>Age: {this.state.age}</div>
                            <div>Gender: {this.state.gender}</div>
                            <div>Residence: {this.state.residence}</div>
                            <div>Email: {this.state.email}</div>
                            <div>Phone: {this.state.phone}</div>
                            <div>Address: {this.state.address}</div>
                            <div>City: {this.state.city}</div>
                        </div>
                        <div className="profile-buttons">
                            <button onClick={this.handleEdit}>Edit</button>
                            <Link to="/" className="home-button">Home</Link>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Profile;
