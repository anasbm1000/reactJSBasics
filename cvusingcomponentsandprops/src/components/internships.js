import React from 'react';

class Internships extends React.Component {
  render() {
    return (
      <div>
        <h4>Internships</h4>
        <hr />
        <div className='internship'>
          <div className='internshipDetails'>
            <p id='companyname'>TheVeganHut, Amsterdam, Netherlands [REMOTE]</p>
            <p>AI/ML Agritech Intern</p>
            <ul>
              <li>Created a neural network with 93% accuracy to identify NPK nutrient deficiency in lettuce plants with the help of TensorFlow and Keras libraries.</li>
              <li>Created a logistic regression model with 90% accuracy to predict the macro/micro-nutrient uptake in a lettuce plant should take on a daily/weekly basis.</li>
              <li>Designed various UI’s expected to be in a dashboard of the climate software.</li>
            </ul>
          </div>
          <div className='internshipyear'>
            <p>September 2023 – Present</p>
          </div>
        </div>
        <div className='internship'>
          <div className='internshipDetails'>
            <p id='companyname'>Riss Technologies, Thrissur, India [ON-SITE]</p>
            <p>MERN Stack Intern</p>
            <ul>
              <li>Created responsive websites using HTML5, CSS3, Bootstrap and JavaScriptES6.</li>
              <li>Created a website for a petshop which contains a home, login, customer registration and available products pages.</li>
              <li>Practised various CRUD Operations in MongoDB and implemented 4-5 databases.</li>
            </ul>
          </div>
          <div className='internshipyear'>
            <p>June 2024 – Present</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Internships;
