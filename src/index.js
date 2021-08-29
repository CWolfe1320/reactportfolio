import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends Component {
  render(){
    return(
      <div>
        <Navigation logoTitle="Corey Wolfe"/>
        <Header title="Corey Wolfe" bResume="Resume" bGit="Github" bLinkd="LinkedIn"/>
        <About about="About Me" tsf="Theatre Strike Force" hobbies="Hobbies"/>
        <Portfolio portfolio="Portfolio" minesweeper="Minesweeper" gator="Gator AVL" website="React Portfolio Website" pomodorobuddy="Pomodoro Buddy" tacl="T.A.C.L."/>
        <Contact contact="Contact Me:"/>
        <Footer copyRight="Corey Wolfe © 2021"/>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
