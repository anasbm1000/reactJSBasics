import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    residence: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    residence: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const profileData = localStorage.getItem('profileData');
    if (profileData) {
      setProfile(JSON.parse(profileData));
      setSubmitted(true);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProfile({ ...form });
    setSubmitted(true);
    localStorage.setItem('profileData', JSON.stringify(form));
  };

  const handleEdit = () => {
    setForm({ ...profile });
    setSubmitted(false);
  };

  const handleClear = () => {
    setForm({
      name: "",
      age: "",
      gender: "",
      residence: "",
      email: "",
      phone: "",
      address: "",
      city: "",
    });
  };

  return (
    <div className={`profile-container ${submitted ? 'submitted' : ''}`}>
      {submitted ? (
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
            <button onClick={handleEdit}>Edit</button>
            <Link to="/" className="home-button">Home</Link>
          </div>
        </div>
      ) : (
        <form className="profile-form" onSubmit={handleSubmit}>
          <h2>Enter Your Profile Details</h2>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td><input type="text" name="name" placeholder='Enter your name' value={form.name} onChange={handleChange} required /></td>
                <th>Age</th>
                <td><input type="number" name="age" placeholder='Enter your age' value={form.age} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <th>Gender</th>
                <td><input type="text" name="gender" placeholder='Enter your gender' value={form.gender} onChange={handleChange} required /></td>
                <th>Residence</th>
                <td><input type="text" name="residence" placeholder='Enter your residence' value={form.residence} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <th>Phone</th>
                <td><input type="text" name="phone" placeholder='Enter your phone number' value={form.phone} onChange={handleChange} required /></td>
                <th>Email</th>
                <td><input type="email" name="email" placeholder='Enter your email' value={form.email} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <th>City</th>
                <td><input type="text" name="city" placeholder='Enter your city' value={form.city} onChange={handleChange} required /></td>
                <th>Address</th>
                <td><input type="text" name="address" placeholder='Enter your address' value={form.address} onChange={handleChange} required /></td>
              </tr>
            </tbody>
          </table>
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
            <Link to="/" className="home-button">Home</Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
