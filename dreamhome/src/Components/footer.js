import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='App-footer'>
                    <div className='footer-top'>
                        <div className='footer-links'>
                            <ul itemType='list' className='none'>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Services</a></li>
                            </ul>
                        </div>
                        <div className='footer-links'>
                            <h3>Contact Us</h3>
                            <p>Phone: 123-456-7890</p>
                            <p>Email: 0Yv9E@example.com</p>
                            <p>Address: 123 Main Street, Anytown USA</p>
                            <p>Website: www.example.com</p>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        <p>All rights reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;

