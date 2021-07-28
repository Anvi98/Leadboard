import LeaderBoard from "./app";

const board = new LeaderBoard();
export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

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

export const display = data => {
  data.forEach(user => {
    const container = document.querySelector('.board');
    const li = document.createElement('li');
    li.classList.add('user-score');

    if(!isNaN(user.score)) {
      li.innerHTML = `${user.user}: ${user.score}`;
      container.appendChild(li);
    }
  });
}

// Refresh
const refreshItems = () => {
  board.get(url)
    .then(res => {
      const data = res.result;
      display(data);
    })
    .catch(err => console.log(err));
}

const refresh = document.querySelector('.refresh').addEventListener('click', refreshItems);