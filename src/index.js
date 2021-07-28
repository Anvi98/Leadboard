import './style.css';
import { callApi, createGame } from './apiCalls.js';

const name = {name: "Mario Kart"};
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';


createGame(name);
callApi(url);



