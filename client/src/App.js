import React, { Component } from 'react';
import './App.css';
//import SlickSlider from './components js/LandingPage/SliderHero';
// import ImgGallery from './components js/ImgGallery';
import LandingPage from './components js/LandingPage/LandingPage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { films: [] };
    

  }


  componentDidMount() {
    fetch('/films')
      .then(res => res.json())
      .then(films => this.setState({ films }));
  }

  render() {
    return (
      <div className="App">
      
        <LandingPage />
        
    
        
      </div>
    );
  }
}

export default App;
