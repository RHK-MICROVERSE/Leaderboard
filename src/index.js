import './index.css';
import Ranks from './modules/ranklist.js';

const rankRefreshButton = document.querySelector('.refreshButton');
const userFormInput = document.querySelector('.formInput');

rankRefreshButton.addEventListener('click', Ranks.displayRanks);

userFormInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const gameUser = document.getElementById('userName').value;
  const gameUserScore = document.getElementById('userScore').value;
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ba2iKDvSMzzZCyKRElz6/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: gameUser,
      score: gameUserScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(`HTTP error! status: ${error}`);
    });

  userFormInput.reset();
});