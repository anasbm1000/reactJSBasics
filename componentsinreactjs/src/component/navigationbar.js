import React, { Component } from 'react';
import './navigationbar.css';

class Navigationbar extends Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <div className='fHeading'>
                        <img src=" https://cdn-icons-png.flaticon.com/512/25/25231.png" height={50} alt="" />
                        <h1>ABC College</h1>
                    </div>
                    <div className='links'>
                        <a href='#'>Home</a>
                        <a href='#'>About</a>
                        <a href='#'>Contact</a>
                        <a href='#'>Login</a>
                        <a href='#'>Register</a>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Navigationbar;
