import axios from 'axios';
import NavBar from './NavBar';


import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      chuck: {}
    };
  }

  componentDidMount() {
    axios
      .get('https://api.chucknorris.io/jokes/random?category=dev')
      .then(response => {
        this.setState({
          chuck: response.data
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
          <div className="container">
            <div class="row">
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title"> Chuck Dev Jokes </span>
                    <p>{this.state.chuck.value}</p>
                  </div>
                  <div>
                    <img src={this.state.chuck.icon_url} />
                  </div>
                  {setTimeout(function() {
                    window.location.reload();
                  }, 7000)}
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
