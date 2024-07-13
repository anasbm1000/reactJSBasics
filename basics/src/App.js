import './App.css';
import React, { Component } from 'react';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     //</div>
//     <div className='App-header'>
//       <h1>Hello World</h1>
//     </div>

//   );
// }

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='nav'>
          <div className='fHeading'>
            <h1>React App</h1>
          </div>
          <div className='links'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Register</a>            
            <a href='#'>Login</a>
          </div>
        </div>
        <div className='App-header'>
          <img src="collegeview1.jpeg" className='App-logo' alt='college' />
          <div className='login form'>
            <h2>Login</h2>
            <form action='' method='post'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" placeholder="Username" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="password" placeholder="Password" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button type="submit">Login</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          {/* <div className='registration'>
            <h2>Registration</h2>
            <form action='' method='post'>
              <table>
                <tbody>
                  <tr>
                    <th>First Name</th>
                    <td><input type="text" placeholder="First Name" /></td>
                    <th>Last Name</th>
                    <td><input type="text" placeholder="Last Name" /></td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>
                      <input type="radio" name="gender" value="male" />Male
                      <input type="radio" name="gender" value="female" />Female
                    </td>
                    <th>Residence</th>
                    <td>
                      <input type="radio" name="residence" value="india" />India
                      <input type="radio" name="residence" value="abroad" />Abroad
                    </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td><input type="email" placeholder="Email Id" /></td>
                    <th>DOB</th>
                    <td><input type="date" placeholder="dd/mm/yyyy" /></td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td><input type="number" placeholder="Phone no" /></td>
                    <th>Aadhaar</th>
                    <td><input type="number" placeholder="12-digit Aadhaar" /></td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td><textarea name="address" cols="20" rows="5"></textarea></td>
                    <th>City</th>
                    <td><input type="text" placeholder="City" /></td>
                  </tr>
                  <tr>
                    <th>Username</th>
                    <td><input type="text" placeholder="Username" /></td>
                    <th>Password</th>
                    <td><input type="password" placeholder="Password" /></td>
                  </tr>
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center' }}>
                      <button type="submit">Register</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div> */}
          <div className='App-footer'>
          <p> 2024 App. All rights reserved.</p>
          <div className='footer-links'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Service</a>
            <a href='#'>Contact Us</a>
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;

