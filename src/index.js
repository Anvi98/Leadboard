import './style.css';
import { callApi, createGame } from './apiCalls.js';
import { url } from './apiCalls.js';

const name = {name: "Mario Kart"};


createGame(name);
callApi(url);



