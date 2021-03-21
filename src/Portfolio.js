import React, { Component } from 'react'
import './Portfolio.css'


class Portfolio extends Component{
    render(){
        return(

            <div className="portfolio" id="Portfolio">

                <h1>{this.props.portfolio}</h1>


                <a href="https://github.com/CWolfe1320/minesweeper"><h2>{this.props.minesweeper}</h2></a>
                <div className="minemedia">
                <img src= 'images/minesweeper.gif' alt=""/>
                <img src= 'images/minesweeperwin.png' alt=""/>
                </div>
                <p>Minesweeper completely recreated in C++ utilizing SFML libraries</p>

                <a href="https://github.com/CWolfe1320/gatoravl"><h2>{this.props.gator}</h2></a>
                <div className="gatormedia">
                <img src= 'images/avl.svg' alt=""/>
                <img src= 'images/gator1.png' alt=""/>
                <img src= 'images/gator2.png' alt=""/>
                </div>
                <p>Gator AVL is a CLI application that manages numerous eight digit ids utilizing an AVL tree. The Gator AVL application was created using C++</p>

                <a href="https://github.com/CWolfe1320/reactwebsite"><h2>{this.props.website}</h2></a>
                <div className="websitemedia">
                <img src= 'images/website.jpg' alt=""/>
                </div>
                <p>Portfolio website created utilizing REACTJS</p>
            </div>

        );
    }
}
export default Portfolio;