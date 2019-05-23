import React, { Component } from 'react';
import './LoadingPage.css';
import LandingPage from './LandingPage';
class LoadingPage extends Component {
    

    state = {
        visible: false
    }

    render() {
      return (
        
       
          <div className="LoadingPage">
              <div className="FlexLoadingPage">
                    <h1 id="typeWriting">Tchi Tcha, a major place in french cinema</h1>
                  <button className="buttonTchiTcha" onClick={() => { this.setState({ visible: true }); }} ><div id="text"></div>TCHITCHA</button>
                  </div>
              {this.state.visible ? <LandingPage /> : true} 
              

          </div>
            
          );
        }

}

export default LoadingPage;