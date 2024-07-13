import './App.css';
import React, { Component } from 'react';
import Personaldetails from './components/personaldetails';
import Summary from './components/summary';
import Educationdetails from './components/educationaldetails';
import Projects from './components/projects';
import Internships from './components/internships';
import Skillset from './components/skillset';

class App extends Component {
  state = {
    name: "Anas bin Malik",
    jobRole: "Front end Developer",
    place: "Mannarkkad",
    city: "Palakkad",
    phone: "7382917301",
    emailID: "anasbinmalik1000@gmail.com",
    github: "https://github.com/anasbm1000",
    linkedin: "https://www.linkedin.com/in/anasbm1000/",
    college1: "GEC Thrissur(APJAKTU), Thrissur, India",
    college1CGPA: "7.94",
    college2: "GEC Palakkad(APJAKTU), Palakkad, India",
    college2CGPA: "8.34",
    college3: "DHSS Nellipuzha(State Board), Palakkad, India",
    college3CGPA: "97.75%",
  };

  render() {
    return (
      <div className="App">
        <Personaldetails
          name={this.state.name}
          place={this.state.place}
          city={this.state.city}
          jobRole={this.state.jobRole}
          phone={this.state.phone}
          emailID={this.state.emailID}
          github={this.state.github}
          linkedin={this.state.linkedin}
        />
        <Summary />
        <Educationdetails
          college1={this.state.college1}
          college1CGPA={this.state.college1CGPA}
          college2={this.state.college2}
          college2CGPA={this.state.college2CGPA}
          college3={this.state.college3}
          college3CGPA={this.state.college3CGPA}
        />
        <Projects />
        <Internships />
        <Skillset />
      </div>
    );
  }
}

export default App;
