import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    residence: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    profilePicture: "", 
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
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    localStorage.setItem('profileData', JSON.stringify(profile));
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleClear = () => {
    setProfile({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      residence: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      profilePicture: "", 
    });
    localStorage.removeItem('profileData');
  };

  const handleBack = () => {
    setSubmitted(true);
  };

  return (
    <div className={`profile-container ${submitted ? 'submitted' : ''}`}>
      {submitted ? (
        <div className="profile userprofile">
          <div className="profile-img">
            {profile.profilePicture ? (
              <img src={profile.profilePicture} height={100} alt="Profile" />
            ) : (
              <img src="./profile.png" height={100} alt="Default Profile" />
            )}
            <h2>{profile.firstName} {profile.lastName}</h2>
            <div>{profile.age}, {profile.gender}</div>
          </div>
          <div className="profile-details userprofile">
            <div>{profile.phone}, </div>
            <div>{profile.email}</div>
            <div>{profile.address}, </div>
            <div>{profile.city}, </div>
            <div>{profile.residence}</div>
          </div>
          <div className="profile-buttons">
            <button onClick={handleEdit}>Edit</button>
            <button type="button" onClick={handleClear}>Clear</button>
            <Link to="/" className="home-button">Home</Link>
          </div>
        </div>
      ) : (
        <form className="profile-form addprofile" onSubmit={handleSubmit}>
          <h2>Enter Your Profile Details</h2>
          <table>
            <tbody>
              <tr>
                <th>First Name</th>
                <td><input type="text" name="firstName" placeholder='Enter your first name' value={profile.firstName} onChange={handleChange} required /></td>
                <th>Last Name</th>
                <td><input type="text" name="lastName" placeholder='Enter your last name' value={profile.lastName} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <th>Age</th>
                <td><input type="number" name="age" placeholder='Enter your age' value={profile.age} onChange={handleChange} required /></td>
                <th>Gender</th>
                <td>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    style={{ color: 'white', display: 'inline', width: '20px' }}
                    checked={profile.gender === 'Male'}
                    onChange={handleChange}
                    required
                  /> Male
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    style={{ color: 'white', display: 'inline', width: '20px' }}
                    checked={profile.gender === 'Female'}
                    onChange={handleChange}
                    required
                  /> Female
                </td>
              </tr>
              <tr>
                <th>Residence</th>
                <td><input type="text" name="residence" placeholder='Enter your residence' value={profile.residence} onChange={handleChange} required /></td>
                <th>Phone</th>
                <td><input type="text" name="phone" placeholder='Enter your phone number' value={profile.phone} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <th>Email</th>
                <td><input type="email" name="email" placeholder='Enter your email' value={profile.email} onChange={handleChange} required /></td>
                <th>City</th>
                <td><input type="text" name="city" placeholder='Enter your city' value={profile.city} onChange={handleChange} required /></td>
              </tr>
              <tr>
                <th>Address</th>
                <td><input type="text" name="address" placeholder='Enter your address' value={profile.address} onChange={handleChange} required /></td>
                <th>Your Photo</th>
                <td colSpan="3">
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
            <button type="button" onClick={handleBack}>Back</button>
            <Link to="/" className="home-button">Home</Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
