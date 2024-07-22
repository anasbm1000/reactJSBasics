import './App.css';
import React from 'react';

import Navbar from './Components/navbar';
import Aboutus from './Components/aboutus';
import Footer from './Components/footer';
import Designs from './Components/designs';
import Arcitects from './Components/arcitects';



class App extends React.Component {
  state = {
    name1 : "Modern House Design",
    name2 : " Ceiling design, Fall ceiling",
    name3 : "House Design",
    name4 : "Build by our best Architects",
    arch1name : "Dominic Toreto",
    arch2name : "Brian O'conner",
    arch3name : "Tez",
    arch4name : "Romen Pierce",
    
  }
  render() {
    return (
      
      <div>
        
        <Navbar/>
        <Aboutus/>
        <Designs
          name1={this.state.name1}
          name2={this.state.name2}
          name3={this.state.name3}
          name4={this.state.name4}
        />
        <Arcitects
          name1={this.state.arch1name}
          name2={this.state.arch2name}
          name3={this.state.arch3name}
          name4={this.state.arch4name}
        />
        <Footer/> 
        
      </div>
    );
  }
}

export default App;
