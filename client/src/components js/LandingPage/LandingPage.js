import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from '../Home';
import Movies from '../Movies';
import InTheaters from '../InTheaters';
import Premiere from '../Premiere';
import Category from '../Category';
import Seances from '../Seances';
import TchiTcha from '../TchiTcha';
import Contact from '../Contact';
import Footer from './Footer';
import SlickSlider from './SliderHero';

import Hamburger from '../img/hamburger.svg';

import'./LandingPage.css';


class LandingPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
        visible: false
    }
      this.displayMenuList = this.displayMenuList.bind(this);
      this.displayBtnAdmin = this.displayBtnAdmin.bind(this);
}

displayMenuList() {
    this.setState({ visible: true });

  }

  displayBtnAdmin() {
    this.setState({ visible : false });

}


  


    render() {
      return ( 
          
        <Router>
          
          <div className="rowMenu">
          <img src={Hamburger} id="MenuHamburger" alt="Menu hamburger" onClick={this.displayMenuList}/>
          <h1 className="buttonMenu" onClick={this.displayMenuList} >MENU</h1>
            <div className="Admin" style={{ display: this.state.displayBtnAdmin ? 'block' : 'none' }}><a></a></div>
            </div>
            {this.state.visible ? <Header /> : true}
            
            
          <SlickSlider></SlickSlider>
          
          
            <Route exact path="/" component={Home}/>
            <Route path="/Movies/" component={Movies} />
            <Route path="/InTheaters/" component={InTheaters} />
            <Route path="/Premiere/" component={Premiere} />
            <Route path="/Category/" component={Category}/>
            <Route path="/Seances/" component={Seances}/>
            <Route path="/TchiTcha/" component={TchiTcha}/>
            <Route path="/Contact/" component={Contact} />
               
            <Footer/>
            
            
          </Router>
        
        
            
          );
        }

}

export default LandingPage;