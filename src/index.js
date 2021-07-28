import './style.css';
import { callApi, createGame, url } from './apiCalls.js';

const name = { name: 'Mario Kart' };

createGame(name);
callApi(url);
