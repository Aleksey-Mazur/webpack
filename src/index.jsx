import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json';
import WebpackLogo from '@/assets/webpack-logo';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './babel';
import './styles/styles.css';
import './styles/main.scss';

// const post = new Post('Webpack Post Title', WebpackLogo);
// $('pre').addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre />
    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

const root = createRoot(document.getElementById('app'));
root.render(<App />);

// console.log('Post to String:', post.toString());
// console.log(post.uppercaseTitle);

// console.log('JSON:', json);
