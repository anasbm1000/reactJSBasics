import React from 'react';
import '../../App.css';

const Home = () => {
    return (
        <div>
            <div className='App'>
                <img id='banner' src="../banner.jpeg" alt="" />
            </div>
            <div className='aboutus'>
                <div>
                    <p>
                        Esparento Arena was established in 2018 by three young enthusiastic engineers who are experts in the 
                        field of sports construction and management. We are dedicated to providing the best artificial turf 
                        for both athletic and landscape purposes. We offers consultation, construction, installation, 
                        service and maintenance of all types of artificial turf sports fields all over india. 
                        After two years of establishment, our services and  products, such as football turf, hockey turf, tennis 
                        turf, multi sport turf and landscape grass have served clients from multiple regions with varying needs, 
                        including professional football clubs, government bodies, schools, and countless households.
                    </p>
                </div>
                <div>
                    <img src="../turf-field.png" alt="" />
                </div>
            </div>
            <div className='certifications'>
                <div className='certifications-img'>
                    <div><img src="./fifa.png" alt="mens" /></div>
                    <div><p>FIFA Certified</p></div>
                </div>
                <div className='certifications-img'>
                    <div><img src="./durable.png"  alt="mens" /></div>
                    <div><p>Highly durable</p></div>
                </div>
                <div className='certifications-img'>
                    <div><img src="./climate.png" alt="mens" /></div>
                    <div><p>Climate sustainable</p></div>
                </div>
                <div className='certifications-img'>
                    <div><img src="./no-toxic.png" alt="mens" /></div>
                    <div><p>Non-toxic nature</p></div>
                </div>
            </div>
        </div>
    );
}



export default Home;
