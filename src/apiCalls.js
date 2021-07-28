import LeaderBoard from './app.js';

const board = new LeaderBoard();
const gameid = 'SmX2CRxzg5yH7Ev8gg4H';
export const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`;

// Create game
export const createGame = (name) => {
  board.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', name)
    .then((response) => {
      const container = document.querySelector('.container');
      const div = document.createElement('div');
      div.classList.add('message-created');
      div.innerHTML = `${response.result}`;
      container.appendChild(div);

      // setTimeout(() => {
      //   div.classList.add('message-hidden');
      // }, 2000);
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
    const sortedData = data.sort((a, b) => {
      if (Number(a.score) > Number(b.score)) {
        return -1;
      }
      if (Number(a.score) < Number(b.score)) {
        return 1;
      }
      return 0;
    });

    sortedData.forEach((user) => {
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
  const items = document.querySelectorAll('li');
  if(items.length > 0){
    items.forEach(item => {
      item.remove();
    })
  }
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
const submit = document.querySelector('.submit');


function sendData(e) {
  const username = document.querySelector('.name');
  const score = document.querySelector('.user_score');
  const newData = {
    user: username.value,
    score: score.value
  };


  e.preventDefault();
  board.post(url, newData)
    .then((res) => {
      console.log(res);
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
