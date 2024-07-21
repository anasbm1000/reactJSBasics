import React, { Component } from 'react';
import './App.css';
import Useofmap from './component/useofmap';

class App extends Component {
  state = {
    fname: "Anas",
    lname: "bin Malik",
    age: 22,
    city: "Palakkad",
    country: "India",
    gender: "Male",
    residence: "Abroad",
    email: "abmalik@example.com",
    phone: 1234567890,
    address: "Mannarkkad",
    dob : "08-01-2002",
    aadhaar : 1234567890,
    username: "anas123",
    password: "1234567890"
  }

  state2 = {
    fname: "Anas",
    lname: "bin Malik",
    age: 22,
    city: "Palakkad",
    country: "India",
    gender: "Male",
    residence: "Abroad",
    email: "abmalik@example.com",
    phone: 1234567890,
    address: "Mannarkkad",
    dob : "08-01-2002",
    aadhaar : 1234567890,
    username: "anas123",
    password: "1234567890"
  }
  render() {
    return (
      <div>
          <div className='nav'>
            <div className='fHeading'>
              <img src=" https://cdn-icons-png.flaticon.com/512/25/25231.png" height={50} alt="" />
              <h1>ABC College</h1>
            </div>
            <div className='links'>
              <a href='#'>Home</a>
              <a href='#'>About</a>
              <a href='#'>Contact</a>
              <a href='#'>Login</a>
              <a href='#'>Register</a>
            </div>
          </div>
          <div className="App">
          <Useofmap/>
          
          {/* <div>
          <div className='profile'>
                <div className='profile-img'>
                  <div><img src="./profile.png" height={100} alt="pp" /></div>
                  <div><h2>{this.state.fname} {this.state.lname}</h2></div>
                </div>
                <div className='profile-details'>
                  <div>Age: {this.state.age}</div>
                  <div>Gender: {this.state.gender}</div>
                  <div> Residence: {this.state.residence}</div>
                  <div> Email: {this.state.email}</div>
                  <div> Phone: {this.state.phone}</div>
                  <div> Address: {this.state.address}</div>
                  <div> City: {this.state.city}</div>
                </div>
                
                

                    
                      
            </div>
            <div className='profile'>
            <div className='profile-img'>
                  <div><img src="./profile.png" height={100} alt="pp" /></div>
                  <div><h2>{this.state2.fname} {this.state2.lname}</h2></div>
                </div>
                <div className='profile-details'>
                  <div>Age: {this.state2.age}</div>
                  <div>Gender: {this.state2.gender}</div>
                  <div> Residence: {this.state2.residence}</div>
                  <div> Email: {this.state2.email}</div>
                  <div> Phone: {this.state2.phone}</div>
                  <div> Address: {this.state2.address}</div>
                  <div> City: {this.state2.city}</div>
                </div>
            </div>
            </div> */}
            
          
        </div>
        
          
        
            <footer className='App-footer'>
              <p> All rights reserved.</p>
              <div className='footer-links'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Service</a>
                <a href='#'>Contact Us</a>
              </div>
            </footer>
      </div>
    );
  }}
export default App;


