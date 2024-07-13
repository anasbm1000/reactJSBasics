import React from 'react';

class Personaldetails extends React.Component {
  render() {
    return (
      <div className='App'>
        <h2>{this.props.name}</h2>
        <h3>{this.props.jobRole}</h3>
        <p>{this.props.place}, {this.props.city} | {this.props.phone} | {this.props.emailID} | <a href={this.props.github}>GitHub</a> | <a href={this.props.linkedin}>LinkedIn</a></p>
        <hr />
      </div>
    );
  }
}

export default Personaldetails;
