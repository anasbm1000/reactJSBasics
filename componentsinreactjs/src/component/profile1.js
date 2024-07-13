import React, { Component } from 'react';
import './profile.css';

class Profile1 extends Component {
    render() {
        return (
            <div>
                <div className='profile'>
                    <div className='profile-img'>
                        <div><img src="./profile.png" height={100} alt="pp" /></div>
                        <div><h2>Anas bin Malik</h2></div>
                    </div>
                    <div className='profile-details'>
                        <div>Age: 22</div>
                        <div>Gender: Male</div>
                        <div> Residence: India</div>
                        <div> Email: abm@gmail.com</div>
                        <div> Phone: 6737281991</div>
                        <div> Address: Mannarkkad</div>
                        <div> City: Palakkad</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile1;
