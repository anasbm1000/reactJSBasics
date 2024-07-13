import React, { Component } from 'react';

class Complaintsandsolutions extends React.Component {
    state={
        name : "",
        email : "",
        dateOfComplaint : "",
        subject : "",
        description : "",
        statusOfComplaint : ""
    }

    content=event=>{
        console.log("typing...")
        console.log(this.state.name)
        console.log(event.target.value)
        // this.setState({firstname:event.target.value})
        this.setState({
            [event.target.name]:event.target.value
        })
    }

  

    submission=()=>{
        console.log("registered")
        console.log(this.state)
    }
    render() {
        return (
            
            <form action="" method="post" className='App-header'>
                
                <table>
                    {/* <tr>
                        <th></th>
                        <th><h1>Registration</h1></th>
                    </tr> */}
                    <tr>
                        <th> Name</th>
                        <td><input type="text" name='name'  value={this.state.name} onChange={this.content} placeholder='Name' /></td>
                       
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td><input type="email" name='email' value={this.state.email} onChange={this.content} placeholder='Email' /></td>
                    </tr>
                    <tr>
                        <th>Subject</th>
                        <td><input type="text" name='subject' value={this.state.subject} onChange={this.content} placeholder='Subject of Complaint' /></td>
                        
                    </tr>
                    <tr>
                    <th>Date of Complaint</th>
                        <td><input type="date" name='dateOfComplaint' value={this.state.dateOfComplaint} onChange={this.content} placeholder='Date of Complaint' /></td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td><textarea name="description" value={this.state.description} onChange={this.content} placeholder='Description of Complaint'></textarea></td>                        
                        {/* <th>Status of Complaint</th>
                        <td><input type="text" name='statusOfComplaint' value={this.state.statusOfComplaint} onChange={this.content} placeholder='Status of Complaint' /></td> */}
                    </tr>
                    <tr>
                        <th></th>
                        
                        <th><button type='button' onClick={this.submission}>Check</button></th>
                    </tr>
                </table>
            </form>
        );
    }
}

export default Complaintsandsolutions;

