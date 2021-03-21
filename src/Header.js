import React, { Component } from 'react'
import Background from './img/bgyes.jpg'
import './Header.css'

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    'height': '94vh',
    backgroundSize: 'cover'
}

class Header extends Component{


    render(){
        return(


            <header style={myStyles} id="Home">

                <h1>{this.props.title}</h1>
                <p>Techno Wizard</p>
                <img src= 'images/headshot.jpg' alt=""/>
                <div></div>
                <a href="https://docs.google.com/document/d/10cq95ML87sONuPzWs93tXUMw47EzYCV3KBxqWMxGfdE/edit?usp=sharing">{this.props.bResume}</a>
                <a href="https://github.com/CWolfe1320">{this.props.bGit}</a>
                <a href="https://www.linkedin.com/in/corey-wolfe/">{this.props.bLinkd}</a>
            </header>


        );
    }
};
export default Header;
