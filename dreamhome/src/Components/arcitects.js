import React from 'react';
import '../App.css';

class Arcitects extends React.Component {
    render() {
        return (
            <div>
                <div className="App">
                    <h2>Our Architects</h2>
                </div>
                <div className='category'>
                    <div className='category-img'>
                        <div><img src="./arch1.png" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name1}</h2></div>
                    </div>
                    <div className='category-img'>
                        <div><img src="./arch2.png" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name2}</h2></div>
                    </div>
                    <div className='category-img'>
                        <div><img src="./arch3.png" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name3}</h2></div>
                    </div>
                    <div className='category-img'>
                        <div><img src="./arch4.png" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name4}</h2></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Arcitects;
