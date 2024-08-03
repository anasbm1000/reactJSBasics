import React from 'react';
import {Link} from 'react-router-dom';

import '../../App.css';

const Ad = () => {
    return (
        <div>
            <div className="App">
                <h2>Our Sponsers</h2>
            </div>
            <div className='category'>
                <div className='category-img'>
                    <div><img src="./jubilee.jpg" alt="" /></div>
                    <div><a href="https://shorturl.at/2UEXq" target="_blank" rel="noopener noreferrer">View in map</a></div>
                </div>
                <div className='category-img'>
                    <div><img src="./rasoi-fortcochin.jpg"  alt="" /></div>
                    <div><a href="https://shorturl.at/bs9oy" target="_blank" rel="noopener noreferrer">View in map</a></div>
                </div>
                <div className='category-img'>
                    <div><img src="./taazaj.jpg" alt="" /></div>
                    <div><a href="https://shorturl.at/n15cx" target="_blank" rel="noopener noreferrer">View in map</a></div>
                </div>
            </div>
        </div>
    );
}



export default Ad;
