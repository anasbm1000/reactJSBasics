import './App.css';
import React from 'react';

import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Ourproducts from './Components/ourproducts';
import Bycategory from './Components/bycategory';
import Feedback from './Components/feedback';



class App extends React.Component {
  state = {
    name1 : "Mens",
    name2 : "Womens",
    name3 : "Kids",
  }
  render() {
    return (
      
      <div>
        
        <Navbar/>
        <Bycategory
          name1={this.state.name1}
          name2={this.state.name2}
          name3={this.state.name3}
        />
        <Ourproducts/>
        <Feedback/>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
