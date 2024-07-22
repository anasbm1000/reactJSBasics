import React from 'react';


class Designs extends React.Component {
    render() {
        return (
            <div>
                <div className="App">
                    <h2>Our Popular Designs</h2>
                </div>
                <div className='category'>
                    <div className='category-img'>
                        <div><img src="./contemporary-home-design.jpg" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name1}</h2></div>
                    </div>
                    <div className='category-img'>
                        <div><img src="./fan.jpg" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name2}</h2></div>
                    </div>
                    <div className='category-img'>
                        <div><img src="./contemporary-home-design-kerala.jpg" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name3}</h2></div>
                    </div>
                    <div className='category-img'>
                        <div><img src="./contemporary-villa-design.jpg" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name4}</h2></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Designs;
