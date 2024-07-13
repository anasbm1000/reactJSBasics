import React from 'react';

class Skillset extends React.Component {
  render() {
    return (
      <div>
        <h4>Skills</h4>
        <hr />
        <div className="skillset">
          <ul>
            <li>C, Python</li>
            <li>HTML5</li>
            <li>CSS3, Bootstrap</li>
            <li>JavaScriptES6</li>
          </ul>
          <ul>
            <li>Machine Learning Concepts</li>
            <li>Data Structures & Algorithms</li>
            <li>OOPS Concepts</li>
            <li>SQL, MongoDB Concepts</li>
          </ul>
          <ul>
            <li>GitHub</li>
            <li>Decision making</li>
            <li>Communication</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skillset;
