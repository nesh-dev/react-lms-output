import axios from 'axios';
import NavBar from './NavBar';

import React, { Component } from 'react';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      chucklist: {}
    };
  }

  componentDidMount() {
    axios.get('https://api.chucknorris.io/jokes/categories').then(response => {
      this.setState({
        chucklist: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div class="row container">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Categories</span>
                <p>dev</p>
                <p>dev</p>
                <p>food</p>
                <p>music</p>
                <p>music</p>
                <p>music</p>

                <p>music</p>
                <p>explicit</p>
                <p>political</p>
              </div>
              <div class="card-action" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
