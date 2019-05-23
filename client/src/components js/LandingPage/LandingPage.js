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

import'./LandingPage.css';


class LandingPage extends Component {
    

    render() {
      return (
        
        
          
          
          <Router>

            <Header/>
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