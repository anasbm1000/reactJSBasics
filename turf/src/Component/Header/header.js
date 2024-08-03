import React from 'react';
import {Link} from 'react-router-dom';

import '../../App.css';


const Header = () => {
    return (
        <div>
            <div className='nav'>
                <div className='fHeading'>
                    <img src="./logo.png" height={80} alt="" />
                    <h1 id = "welcometag"> The perfect entertainment solution </h1>
                </div>
                <div className='links'>
                    <Link to = "/booknow" id = "booknow"> Book Now </Link>
                    <Link to = "/"> Home </Link>
                    <Link to = "/ad"> Sponsers </Link>
                    <Link to = "/service"> Service </Link>                 
                </div>
            </div>
        </div>
    )
               
}

export default Header;
