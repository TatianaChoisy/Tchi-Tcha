import React, { Component } from 'react';
import './LoadingPage.css';
import LandingPage from './LandingPage';
import imgBackground from '../img/bg.jpg';
class LoadingPage extends Component {
    

    state = {
        visible: false
    }

    render() {
      return (
        
       
          <div className="LoadingPage">
              <div className="FlexLoadingPage">
                    <h1 id="typeWriting">Tchi Tcha, a major place in european cinema</h1>
                  <button onClick={() => { this.setState({ visible: true }); }} ><div id="text"></div>TCHITCHA</button>
                  </div>
          {this.state.visible ? <LandingPage /> : true}

          </div>
            
          );
        }

}

export default LoadingPage;