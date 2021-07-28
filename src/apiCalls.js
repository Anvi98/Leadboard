import LeaderBoard from './app.js';

const board = new LeaderBoard();
export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

// Create game
export const createGame = (name) => {
  board.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', name)
    .then((response) => {
      const container = document.querySelector('.container');
      const div = document.createElement('div');
      div.classList.add('message-created');
      div.innerHTML = `${response.result}`;
      container.appendChild(div);

      setTimeout(() => {
        div.classList.add('message-hidden');
      }, 2000);
    })
    .catch((err) => err);
};

// Get info From Leadboard API
export const callApi = (url) => {
  board.get(url)
    .then((res) => res.result)
    .catch((err) => err);
};

export const display = (data) => {
  data.forEach((user) => {
    const container = document.querySelector('.board');
    const li = document.createElement('li');
    li.classList.add('user-score');
    /* eslint-disable no-restricted-globals */
    if (!isNaN(user.score)) {
      li.innerHTML = `${user.user}: ${user.score}`;
      container.appendChild(li);
    }
  });
};

// Refresh
const refreshItems = () => {
  board.get(url)
    .then((res) => {
      const data = res.result;
      display(data);
    })
    .catch((err) => err);
};

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', refreshItems);

// Submit Button
const username = document.querySelector('.name');
const score = document.querySelector('.score');
const submit = document.querySelector('.submit');

const newData = {
  user: username,
  score,
};

function sendData(e) {
  e.preventDefault();
  board.post(url, newData)
    .then((res) => {
      const form = document.querySelector('form');
      const message = document.createElement('div');
      message.classList.add('message-ok');
      message.innerHTML = `${res.result}`;
      form.appendChild(message);

      setTimeout(() => {
        message.classList.add('message-hidden');
      }, 2000);
    })
    .catch((err) => err);
}

submit.addEventListener('click', sendData);
