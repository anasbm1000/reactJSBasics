import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Profile extends Component {
    state = {
        profile: {
            name: "",
            age: "",
            gender: "",
            residence: "",
            email: "",
            phone: "",
            address: "",
            city: "",
        },
        form: {
            name: "",
            age: "",
            gender: "",
            residence: "",
            email: "",
            phone: "",
            address: "",
            city: "",
        },
        submitted: false
    }

    componentDidMount() {
        const profileData = localStorage.getItem('profileData');
        if (profileData) {
            this.setState({ profile: JSON.parse(profileData) });
        }
    }

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            profile: { ...this.state.form },
            submitted: true
        }, () => {
            localStorage.setItem('profileData', JSON.stringify(this.state.profile));
        });
    }

    handleEdit = () => {
        this.setState({
            submitted: false,
            form: { ...this.state.profile }
        });
    }

    handleClear = () => {
        this.setState({
            form: {
                name: "",
                age: "",
                gender: "",
                residence: "",
                email: "",
                phone: "",
                address: "",
                city: "",
            }
        });
    }

    render() {
        const { form, profile, submitted } = this.state;
        return (
            <div className="profile-container">
                <form className="profile-form" onSubmit={this.handleSubmit}>
                    <h2>Enter Your Profile Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td><input type="text" name="name" placeholder='Enter your name' value={form.name} onChange={this.handleChange} required /></td>
                                <th>Age</th>
                                <td><input type="number" name="age" placeholder='Enter your age' value={form.age} onChange={this.handleChange} required /></td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td><input type="text" name="gender" placeholder='Enter your gender' value={form.gender} onChange={this.handleChange} required /></td>
                                <th>Residence</th>
                                <td><input type="text" name="residence" placeholder='Enter your residence' value={form.residence} onChange={this.handleChange} required /></td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td><input type="text" name="phone" placeholder='Enter your phone number' value={form.phone} onChange={this.handleChange} required /></td>
                                <th>Email</th>
                                <td><input type="email" name="email" placeholder='Enter your email' value={form.email} onChange={this.handleChange} required /></td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td><input type="text" name="city" placeholder='Enter your city' value={form.city} onChange={this.handleChange} required /></td>
                                <th>Address</th>
                                <td><input type="text" name="address" placeholder='Enter your address' value={form.address} onChange={this.handleChange} required /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-buttons">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={this.handleClear}>Clear</button>
                    </div>
                </form>
                {submitted && (
                    <div className="profile">
                        <div className="profile-img">
                            <img src="./profile.png" height={100} alt="pp" />
                            <h2>{profile.name}</h2>
                        </div>
                        <div className="profile-details">
                            <div>Age: {profile.age}</div>
                            <div>Gender: {profile.gender}</div>
                            <div>Residence: {profile.residence}</div>
                            <div>Email: {profile.email}</div>
                            <div>Phone: {profile.phone}</div>
                            <div>Address: {profile.address}</div>
                            <div>City: {profile.city}</div>
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
