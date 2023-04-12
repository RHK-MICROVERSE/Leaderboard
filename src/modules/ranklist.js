const Ranks = {
  displayRanks: () => {
    const scoresList = document.querySelector('.listScore');
    scoresList.innerHTML = `
      <div class="headerListScore">
        <h2 class="latestScores">Recent Scores</h2>
        <button class="refreshButton" onclick="location.reload()">Refresh</button>
      </div>
      <div class="scorelistData">
        <ul class="datas">
          <li class="data">Name: 90</li>
          <li class="data">Name: 85</li>
          <li class="data">Name: 50</li>
          <li class="data">Name: 78</li>
          <li class="data">Name: 48</li>
          <li class="data">Name: 87</li>
          <li class="data">Name: 42</li>
        </ul>
      </div>
    `;
  },
};

export default Ranks;