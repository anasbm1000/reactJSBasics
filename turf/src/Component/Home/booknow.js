import React from 'react';
import {Link} from 'react-router-dom';

import '../../App.css';

const Booknow = () => {
    return (
        <div>
            <div className="App">
                    <h2>What would you like to play today?</h2>
                </div>
                <div className="card-container">
                    <div className="card">
                        <p><Link to = "/football" id="play">Football</Link></p>
                        <p><Link to = "/cricket" id="play">Cricket</Link></p>
                        <p><Link to = "/hockey" id="play">Hockey</Link></p>
                    </div>
                </div>
        </div>
    );
}



export default Booknow;
