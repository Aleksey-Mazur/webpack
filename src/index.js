import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json';
import WebpackLogo from '@/assets/webpack-logo';
import './babel';
import './styles/styles.css';
import './styles/main.scss';

const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

// console.log('Post to String:', post.toString());
// console.log(post.uppercaseTitle);

// console.log('JSON:', json);
