import React from 'react';
import '../App.css';
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <div className='fHeading'>
                        <img src="./neosports.png" height={50} alt="" />
                        <h1>NEO Sports</h1>
                    </div>
                    <div className='links'>
                        <a href='#'>Accessories</a>
                        <a href='#'>Sport Shoes</a>
                        <a href='#'>Kids</a>
                        <a href='#'>Home</a>
                        <a href='#'>Login</a>
                        <a href='#'>Register</a>                      
                    </div>
                </div>
                <div className='banner'>
                <img src="./banner.png" width={1000} className='banner' alt='college' />
                </div>
                
            </div>
        );
    }
}

export default Navbar;
