
import React, { Component } from 'react';
import './Navigation.css'
import { Link } from "react-scroll";
//import './App.css';

class Navigation extends Component {
    render() {
    const sections = ['Home', 'About', 'Portfolio', 'Contact'];
    const navLinks = sections.map( section => {

        return (

            <Link
    activeClass="active"
    to={section}
    spy={true}
    smooth={true}
    offset={-60}
    duration={500}
    >{section}</Link>

        )

    });
    return (
        
        <nav>
            <h2 className="logo">{this.props.logoTitle}</h2>   

            <ul>
                {navLinks}
            </ul>
        </nav>

        

   );
 }
}
export default Navigation;
