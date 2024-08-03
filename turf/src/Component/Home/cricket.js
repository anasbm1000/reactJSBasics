import React from 'react';
import {Link} from 'react-router-dom';

import '../../App.css';

const Cricket = () => {
    return (
        <div>
            <div className="App">
                <h1>Let's Crack Sixers <span id='changedmind'><Link to = "/booknow" id = "booknow"> Changed Mind? </Link></span> </h1>
                <h2>What time slot do you prefer?</h2>
            </div>
            <div className="card-container">
                <div className="card">
                    <p><Link to = "/fee" id="play">6:00am - 7:00am</Link></p>
                    <p><Link to = "/fee" id="play">7:00am - 8:00am</Link></p>
                    <p><Link to = "/fee" id="play">8:00am - 9:00am</Link></p>
                    <p><Link to = "/fee" id="play">9:00am - 10:00am</Link></p>
                    <p><Link to = "/fee" id="play">10:00am - 5:00pm</Link></p>
                    <p><Link to = "/fee" id="play">5:00pm - 6:00pm</Link></p>
                    <p><Link to = "/fee" id="play">6:00pm - 7:00pm</Link></p>
                    <p><Link to = "/fee" id="play">7:00pm - 8:00pm</Link></p>
                    <p><Link to = "/fee" id="play">8:00pm - 9:00pm</Link></p>
                    <p><Link to = "/fee" id="play">9:00pm - 10:00pm</Link></p>
                    <p><Link to = "/fee" id="play">10:00pm -11:00pm</Link></p>
                    <p><Link to = "/fee" id="play">11:00pm - 12:00am</Link></p>
                    <p><Link to = "/fee" id="play">12:00am - 1:00am</Link></p>
                    <p><Link to = "/fee" id="play">1:00am - 2:00am</Link></p>
                </div>
            </div>
        </div>
    );
}



export default Cricket;
