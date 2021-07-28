import './style.css';
import LeaderBoard from './app.js';

const board = new LeaderBoard();

// Create game
const name = {name: "Mario Kart"};
const createGame = name =>{
  board.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', name)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

createGame(name);