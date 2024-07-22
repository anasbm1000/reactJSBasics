import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <div>
                
                <footer className='App-footer'>
                    <p> All rights reserved.</p>
                    <div className='footer-links'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms of Service</a>
                    <a href='#'>Contact Us</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;

