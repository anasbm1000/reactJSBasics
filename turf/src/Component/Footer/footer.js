import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='App-footer'>
                    <div className='footer-top'>
                        <div className='footer-links'>
                            <ul itemType='list' className='none'>
                                <li><Link to = "/"> Home </Link></li>
                                <li><Link to = "/ad"> Sponsers </Link></li>
                                <li><Link to = "/service"> Service </Link></li>
                            </ul>
                        </div>
                        <div className='footer-links'>
                            <h3>Contact Us</h3>
                            <p>Phone: 123-456-7890</p>
                            <p>Email: esperantoarena@gmail.com</p>
                            <p>Address: Malappuram, Kerala</p>
                            <p>Website: www.esperanto.com</p>
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

