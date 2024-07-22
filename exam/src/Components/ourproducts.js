import React from 'react';
import '../App.css';

class Ourproducts extends React.Component {
    state = {
        productdetails: [
            {
                name: "Adidas Starlancer Plus Football",
                spec1: "100% recycled TPU cover",
                spec2: "Machine-stitched construction",
                spec3: "Butyl bladder"
            },
            {
                name: "Adidas Crinu Cricket Shoes",
                spec1: "Aggressive rubber outsole",
                spec2: "Color : Pulse Blue / Impact Yellow",
                spec3: "SKU : GB2765"
            },
            {
                name: "Adidas Men Train Essentials",
                spec1: "Made with 100% recycled materials",
                spec2: "Regular fit",
                spec3: "Crewneck"
            }
        ]
    }

    render() {
        return (
            <div>
                <div className="App">
                    <h2>Our Products</h2>
                </div>
                <div className="card-container">
                {this.state.productdetails.map((value) => (
                    <div className="card">
                        <h3>{value.name}</h3>
                        <p>Spec1: {value.spec1}</p>
                        <p>Spec2: {value.spec2}</p>
                        <p>Spec3: {value.spec3}</p>
                    </div>
                ))}
            </div>
            </div>
        );
    }
}

export default Ourproducts;
