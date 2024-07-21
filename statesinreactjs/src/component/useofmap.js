import React, { Component } from 'react';
import '../App.css';

class Useofmap extends React.Component {
    state = {
        personaldetails: [
            {
                name: "sachin",
                place: "pune",
                city: "pune",
                jobRole: "hockey",
                phone: "9876543210",
            },
            {
                name: "dhonu",
                place: "ranchi",
                city: "ranchi",
                jobRole: "cricketer",
                phone: "7837873822",
            },
            {
                name: "kohli",
                place: "mumbai",
                city: "mumbai",
                jobRole: "cricketer",
                phone: "9876543210",
            }
        ]
    }

    render() {
        return (
            <div className="card-container">
                {this.state.personaldetails.map((value) => (
                    <div className="card">
                        <h3>{value.name}</h3>
                        <p>Place: {value.place}</p>
                        <p>City: {value.city}</p>
                        <p>Job Role: {value.jobRole}</p>
                        <p>Phone: {value.phone}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Useofmap;
