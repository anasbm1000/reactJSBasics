import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';


const Header = () => {
    return (
        <div>
            <Link to = "/"> Home </Link>
            <Link to = "/login"> Login </Link>
            <Link to = "/registration"> Registration</Link>
        </div>
    )
               
}

export default Header;
