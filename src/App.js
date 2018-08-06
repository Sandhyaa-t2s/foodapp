import React, { Component } from 'react';
import images from './images.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
    
      enable : false

    
    }

    
   
    this.bringScore = this.bringScore.bind(this)
    // this.gettingscore = this.gettingscore.bind(this)
    // this.gettingnews = this.gettingnews.bind(this)
  
  
  
  }
  


  bringScore(){
    this.setState({enable : !this.state.enable})
  }
  // gettingscore(){
  //   this.setState({teamname :!this.state.teamname})
  // }
  // gettingnews(){
  //   this.setState({news :!this.state.news})
  // }
  

render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src= {images} className="App-logo" alt="logo" />
          <h1 className="App-title">FOOD SCREEN</h1>
        </header>
        
      
      
      <div className="scrollmenu">
       
       <button>Home</button>
       
        <button  onClick={this.bringScore}>MENU</button>
        {
          this.state.enable ? <Points /> : null
        }
       {
          this.state.enable ? <Hello/> : " "
        }
         {
          this.state.enable ? <Newsinfo/> : " "
        } 
       {
          this.state.enable ?  <yes/> : " "
        }
      
        
     </div>
     </div>
     
    );
  }
}
function Points() {
  return (
    
    <div style={{overflowX: 'auto'}}>
        <table>
          <tbody><tr>
              <th>Breakfast</th>
            </tr>
          </tbody></table>
          </div>
  );
}
function Hello() {
  return (
    
    <div style={{overflowX: 'auto'}}>
        <table>
          <tbody><tr>
          <th>Lunch</th>
            </tr>
          </tbody></table>
          </div>
  );
}
function Newsinfo() {
  return (
    
    <div style={{overflowX: 'auto'}}>
        <table>
          <tbody><tr>
          <th>Hot/Cold Beverages</th>
              </tr>
          </tbody></table>
          </div>
  );
}
function yes() {
  return (
    
    <div style={{overflowX: 'auto'}}>
        <table>
          <tbody><tr>
          <th>Dinner</th>
            </tr>
          </tbody></table>
          </div>
  );
}

export default App