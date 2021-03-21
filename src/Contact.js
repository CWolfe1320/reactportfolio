import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component{

    render(){
        return(


            <div className="cbody" id="Contact">
                <p>{this.props.contact}</p>
                <p>corey.wolfe1320@gmail.com</p>
                <p>+1 404-563-6790</p>
            </div>

            
        );
    }
}
export default Contact;