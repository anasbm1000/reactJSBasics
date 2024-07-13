import './App.css';
import React from 'react';

import Navigationbar from './component/navigationbar';
import Profile1 from './component/profile1';
import Profile2 from './component/profile2';
import Footer from './component/footer';


class App extends React.Component {
  
  render() {
    return (
      
      <div>
        
        <Navigationbar/>
        <div className="App">
        
          <div>
            <Profile1/>
            <Profile2/>
          </div>
          
        
        </div>
        <Footer/>  
      </div>
    );
  }
}

export default App;
