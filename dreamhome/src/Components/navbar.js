import React from 'react';
import '../App.css';
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <div className='fHeading'>
                        <img src="./logo_dreamhome.png" height={55} alt="" />
                    </div>
                    <div className='links'>
                        <a href='#'>Architects</a>
                        <a href='#'>Contractors</a>
                        <a href='#'>Designs</a>
                        <a href='#'>Materials</a>                     
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Navbar;
