import LeaderBoard from "./app";

const board = new LeaderBoard();

// Create game
export const createGame = name =>{
  board.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', name)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}
// Get info From Leadboard API
export const callApi = url => {
  board.get(url)
  .then(res => console.log(res.result))
  .catch(err => console.log(err));
}