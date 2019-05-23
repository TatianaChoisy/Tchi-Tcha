import React, { Component } from 'react';
import Logo from '../img/lettering.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    

    render() {
        return (
        
        
            <div className="Header">
          
                        <header>
                        <ul className="HeaderList">

                            <img id="navLogo" src={Logo} alt="A logo" />
                            <li className="HeaderLi"><Link to="/" className="HeaderLink">Home</Link></li>
                            <li className="HeaderLi"><Link to="/Movies/" className="HeaderLink">Movies</Link></li>
                            <li className="HeaderLi"><Link to="/InTheaters/" className="HeaderLink">In theaters</Link></li>
                            <li className="HeaderLi"><Link to="/Premiere/" className="HeaderLink">Premiere</Link></li>
                            <li className="HeaderLi"><Link to="/Category/" className="HeaderLink">Category</Link></li>
                            <li className="HeaderLi"><Link to="/Seances/" className="HeaderLink">Seances</Link></li>
                            <li className="HeaderLi"><Link to="/TchiTcha/" className="HeaderLink">Tchi Tcha</Link></li>
                            <li className="HeaderLi"><Link to="/Contact/" className="HeaderLink">Contact</Link></li>
                        
                        </ul>
                        </header>
              
     

                  
            </div>


          
        );
    }

}
              
export default Header;