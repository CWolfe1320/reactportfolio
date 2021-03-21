import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component{

    render(){
        return(

            <nav>
                <div className="copyright">
                    
                    <img src= 'images/react.png' alt=""/>
                
                </div>
                <p>{this.props.copyRight}</p>
                <div className="centered">
                    <a href="https://docs.google.com/document/d/10cq95ML87sONuPzWs93tXUMw47EzYCV3KBxqWMxGfdE/edit?usp=sharing"><img src= 'images/resume.png' alt=""/></a>
                    <a href="https://github.com/CWolfe1320"><img src= 'images/github.png' alt=""/></a>
                    <a href="https://www.linkedin.com/in/corey-wolfe/"><img src= 'images/linkedin.png' alt=""/></a>
                </div>


                <div className="contact">
                    
                    <a href="tel:4045636790"><img src= 'images/phone.png' alt=""/></a>

                    <a href="mailto:corey.wolfe1320@gmail.com"><img src= 'images/email.png' alt=""/></a>
                    
                </div>
            </nav>

        );
    }
}
export default Footer;