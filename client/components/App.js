import React from 'react';
import Home from './Home';
import About from './About';
import Categories from './Categories'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './../../assets/styles.css';


export default class App extends React.Component {
  render() {
    return (
    
      <Router>
      <Switch>
      <div style={{textAlign: 'center'}}>
      <Route path="/categories"  component={Categories}/>
      <Route path="/about"  exact component={About}/>
      <Route path="/" exact component={Home} />
      </div>
      
      
      </Switch> 
      </Router>
  
    );
  }
}
