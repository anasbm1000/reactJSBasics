import React from 'react';
import '../../App.css';

const Service = () => {
    return (
        <div>
            <div className="App">
                <h2>Our Services</h2>
            </div>
            <div className='category'>
                <div className='category-img'>
                    <div><img src="./turf-plan.jpg" alt="mens" /></div>
                    <div><h3>Planning & Design</h3></div>
                    <div><p>Esperanto offers professional planning and estimate of your play ground.</p></div>
                </div>
                <div className='category-img'>
                    <div><img src="./turf-manufacturing.jpg"  alt="mens" /></div>
                    <div><h3>Construction & Installation</h3></div>
                    <div><p>We uses high quality and long lasting raw materials to build pitches and play areas.</p></div>
                </div>
                <div className='category-img'>
                    <div><img src="./turf-ligitng.jpg" alt="mens" /></div>
                    <div><h3>Fencing & Lighting</h3></div>
                    <div><p>We build your Turf with high quality imported lighting and fencing solutions.</p></div>
                </div>
            </div>
            <div className='category'>
                <div className='category-img'>
                    <div><img src="./turf-construction.jpg" alt="mens" /></div>
                    <div><h3>Construction</h3></div>
                    <div><p>Our well experienced team has years of experience in construction of wold class football fields.</p></div>
                </div>
                <div className='category-img'>
                    <div><img src="./turf-installation.jpg"  alt="mens" /></div>
                    <div><h3>Grass Installation</h3></div>
                    <div><p>Esperanto has innovative building and manufacturing equipment to install artificial grasses easily and perfectly.</p></div>
                </div>
                <div className='category-img'>
                    <div><img src="./turf-maintenance.jpg" alt="mens" /></div>
                    <div><h3>Maintenance</h3></div>
                    <div><p>Esperanto offers best and quick support and maintenance consultation for our valued clients in India.  </p></div>
                </div>
            </div>
        </div>
    );
}



export default Service;
