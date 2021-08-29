import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './Portfolio.css'


class Portfolio extends Component{
    render(){
        return(

            <div className="portfolio" id="Portfolio">

                <h1>{this.props.portfolio}</h1>

                <a href="https://github.com/CWolfe1320/PomodoroBuddy-Source-Code"><h2>{this.props.pomodorobuddy}</h2></a>
                <div className="pomodoromedia">
                <img src= 'images/pomodoro1.png' alt=""/>
                <div className="pommedia">
                <img src= 'images/pomodoro2.png' alt=""/>
                <img src= 'images/pomodoro4.png' alt=""/>
                </div>
                <div className="pomstats">
                <img src= 'images/pomodoro3.png' alt=""/>
                </div>
                </div>
                <p>Pomodoro Buddy is an application which aims to assist in productivity by encouraging "sprints" of work which are then rewarded with short breaks.</p>

                <a href="https://github.com/CWolfe1320/minesweeper"><h2>{this.props.minesweeper}</h2></a>
                <div className="minemedia">
                <img src= 'images/minesweeper.gif' alt=""/>
                <img src= 'images/minesweeperwin.png' alt=""/>
                </div>
                <p>Minesweeper completely recreated in C++ utilizing SFML libraries</p>

                <a href="https://github.com/CWolfe1320/TACL"><h2>{this.props.tacl}</h2></a>
                <div className="taclmedia">
                <ReactPlayer className = 'react-player' url='https://youtu.be/f29aknLYF-g' controls={true}/>
                </div>
                <div className="tacltext">
                <p>Simple text analysis functionality via the command line using the cxxopts library to form Unix-like command line arguments.</p>
                <p>The project utilized made from scratch data structures such as HashMaps, and AVL Trees.</p>
                </div>
                

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