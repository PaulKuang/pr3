import React, { Component } from 'react'

class Email extends Component{
    submit(){
        var email = document.getElementById("email").value;
        var content = document.getElementById("content");
        
        if (email.indexOf('.com')>-1 && email.indexOf('@') > -1){
            content.innerHTML = "<h3> Valid Email </h3>";
        } else if (email.indexOf('.edu')>-1 && email.indexOf('@') > -1){
            content.innerHTML = "<h3> Valid Email </h3>";
        } else {
            content.innerHTML = "<h3> Invalid Email </h3>";
        }
    }

    render(){
        return (
            <body>
                <br/>
                Your Email: <input id = "email" type='text'/>
                <button onClick = {this.submit}> Submit </button>  
                <p id = "content"> </p>
            </body>
        
        )
    }
}

export default Email
