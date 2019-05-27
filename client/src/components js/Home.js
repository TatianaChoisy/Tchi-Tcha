import React, { Component } from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch('/articles') 
      .then(res => res.json())
      .then(articles => this.setState({ articles }));
    }

    render() {
      return (
        
        
          <div className="Home">
          <h1>Home</h1>

          
    
          </div>
            
          );
        }

}

export default Home;