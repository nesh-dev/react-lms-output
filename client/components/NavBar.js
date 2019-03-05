import React from 'react';
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const nav = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">
            ChuckNoris
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="/Profile"></a>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/categories'>categories</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default nav;
