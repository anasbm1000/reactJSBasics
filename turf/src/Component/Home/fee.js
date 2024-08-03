import React from 'react';
import {Link} from 'react-router-dom';

import '../../App.css';

const Fee = () => {
    return (
        <div>
            <div className="Fee">
                <h1>Your time slot is available. Pay Rs. 1000 at front office. See you there on time</h1>
                <h2><span id='changedmind'><Link to = "/" id = "booknow"> Home </Link></span> </h2>
            </div>
        </div>
    );
}



export default Fee;
