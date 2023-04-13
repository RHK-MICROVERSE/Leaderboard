const datas = document.querySelector('.datas');
const Ranks = {
  displayRanks: () => {
    const getApiResponse = async () => {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ba2iKDvSMzzZCyKRElz6/scores/',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    };

    getApiResponse().then((data) => {
      const rankData = data.result;
      // sort by score
      rankData.sort((x, y) => y.score - x.score);
      datas.innerHTML = rankData.map((game) => `
        <li class="data">${game.user}: ${game.score}</li>
      `).join('');
    });
  },
};

export default Ranks;