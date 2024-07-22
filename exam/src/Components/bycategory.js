import React from 'react';
import '../App.css';

class Bycategory extends React.Component {
    render() {
        return (
            <div>
                <div className="App">
                    <h2>By Category</h2>
                </div>
                <div className='category'>
                    <div className='category-img'>
                        <div><img src="./black-t-shirt.png" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name1}</h2></div>
                    </div>
                    <div className='category-img'>
                        <div><img src="./adidas-women-t-shirt.jpg" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name2}</h2></div>
                    </div>
                    <div className='category-img'>
                        <div><img src="./kids.jpg" height={200} alt="mens" /></div>
                        <div><h2>{this.props.name3}</h2></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bycategory;
