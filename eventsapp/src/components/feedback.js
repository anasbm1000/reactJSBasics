import React, { Component } from 'react';


class Feedback extends React.Component {
    state={
        name : "",
        email : "",
        dateOfFeedback : "",
        description : "",
        rating : ""
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
                    <th>Date of Feedback</th>
                        <td><input type="date" name='dateOfFeedback' value={this.state.dateOfFeedback} onChange={this.content} placeholder='Date of Feedback' /></td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td><textarea name="description" value={this.state.description} onChange={this.content} placeholder='Feedback'></textarea></td>                        
                        
                    </tr>
                    <tr>
                        <th>Rating</th>
                        <td><input type="text" name='rating' value={this.state.rating} onChange={this.content} placeholder='Rating' /></td>
                    </tr>
                    <tr>
                        <th></th>
                        
                        <th><button type='button' onClick={this.submission}>Submit</button></th>
                    </tr>
                </table>
            </form>
        );
    }
}

export default Feedback;
