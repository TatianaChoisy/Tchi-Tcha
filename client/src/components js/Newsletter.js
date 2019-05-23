import React, { Component } from 'react';
import './Newsletter.css';

class Newsletter extends Component {
    
    constructor(props) {
        super(props);
      this.state = {
        email: ''
      }
      
       this.postContact = this.postContact.bind(this);
    }

    postContact(event) {
      event.preventDefault();
      fetch("/newsletter", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state)
      }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(data) {
          console.log(data)    
          if(data == "success"){
             this.setState({msg: "Thanks for registering"});  
          }
      }).catch(function(err) {
          console.log(err)
      });
  } 

    render() {
      return (
          <div className="Newsletter">
          <form autoComplete="off" onSubmit={this.postContact} method="POST">
                 <label className="NewsletterLabel"> Newsletter</label>
                    <input type="text" name="name" className="inputEmail" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                
             <input type="submit" value="Subscribe" className="button" />
            
        </form>
        
          </div>
            
          );
        }

}

export default Newsletter;