import './style.css';
import { callApi, createGame, url } from './apiCalls.js';
import princess from '../src/img/princess.jpg';

const name = { name: 'Mario Kart' };
const element = document.querySelectorAll('body');

 // Add the image to our existing div.
 const myIcon = new Image();
 myIcon.src = princess;

 element.appendChild(myIcon);

background.style = ''
createGame(name);
callApi(url);
