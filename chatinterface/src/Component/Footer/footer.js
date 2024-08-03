import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Footer extends Component {
  state = {
    isTyping: false, 
  };

  handleInputChange = (event) => {
    this.setState({
      isTyping: event.target.value.length > 0,
    });
  };

  render() {
    return (
      <div className="footer">
        <div className="nav">
          <div className="fHeading">
            <img src="./emoji.png" height={25} alt="Emoji" />
            <img src="./attachfile.png" height={25} alt="Attach" />
            <input
              type="text"
              placeholder="Type a Message"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="links">
            <Link to="/"><img src="./camera.png" height={20} alt="Camera" /></Link>
            <Link to="/"><img src={this.state.isTyping ? './send.png' : './voicemessage.png'} height={20} alt={'switchingicons'}/></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
