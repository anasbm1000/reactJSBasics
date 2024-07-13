import React from 'react';

class Educationaldetails extends React.Component {
  render() {
    return (
      <div>
        <h4>Education</h4>
        <hr />
        <div className='college'>
          <div className='collegeDetails'>
            <p id='collegename'>{this.props.college1}</p>
            <p>Currently pursuing M.Tech in CSE with an overall CGPA of {this.props.college1CGPA}</p>
          </div>
          <div className='academicyear'>
            <p>August 2023 - Present</p>
          </div>
        </div>
        <div className='college'>
          <div className='collegeDetails'>
            <p id='collegename'>{this.props.college2}</p>
            <p>Completed B.Tech in CSE with an overall CGPA of {this.props.college2CGPA}</p>
          </div>
          <div className='academicyear'>
            <p>July 2019 - June 2023</p>
          </div>
        </div>
        <div className='college'>
          <div className='collegeDetails'>
            <p id='collegename'>{this.props.college3}</p>
            <p>Completed HSS in Bio-Science with an overall percentage of {this.props.college3CGPA}</p>
          </div>
          <div className='academicyear'>
            <p>July 2017 - March 2019</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Educationaldetails;
