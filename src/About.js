import React, { Component } from 'react'
import './About.css'


class About extends Component{
    render(){
        return(

            <div className="about" id="About">

                <h1>{this.props.about}</h1>
                <img src= 'images/clouds.jpg' alt="" className="clouds"/>
                <p>I am a Junior at the University of Florida in Gainesville Florida, studying to become a computer scientist.</p>
                <p>Computers have fascinated me since before I could talk, and as I've grown older that fascination has bloomed into a true passion.</p>
                <p>Now I am about to start my career doing what I've always loved, and I'm looking to make my mark on the field.</p>
                
                <a href="https://www.theatrestrikeforce.com/"><h1>{this.props.tsf}</h1></a>
                <img src= 'images/improv.png' alt="" className="tsf"/>
                <p className="space">I have a passion for all things comedy, and I am honored to be a part of Theatre Strike Force which is</p>
                <p>University of Florida's premier improv comedy troupe. I perform on the house team Tall Enough To Ride.</p>
                <p>Improv has taught me so much in terms of thinking quickly on my feet, and collaborating with others in a fast paced environment!</p>

                <h1>{this.props.hobbies}</h1>
                <p className = "jillian">I enjoy travelling and adventuring with my girlfriend <a href="https://www.linkedin.com/in/jillian-zuwala/">Jillian Zuwala.</a>I love finding new sights, and creating new memories.</p>
                <p>In addition to that, I love reading, creative writing, gaming, and music. Don't forget long walks on the beach!</p>

                <div className="pinline">
                    <img src= 'images/corian.png' alt="" className="corian"/>
                    <img src= 'images/skydive.jpg' alt="" className="skydive"/>
                </div>

            </div>


        );
    }
};
export default About;