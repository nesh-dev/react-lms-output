import React, { Component } from 'react';
import NavBar from './NavBar';
import './../../assets/styles.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div class="row container">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Idea</span>
                <p>
                  The Idea was conceptualied at a time of need. 
                  Credits to <b>Kevin Munene</b>
                </p>
              </div>
              <div class="card-action">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
