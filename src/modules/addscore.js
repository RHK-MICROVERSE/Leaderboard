const AddScore = {
  addScore: () => {
    const scoreInput = document.querySelector('.scoreInput');
    scoreInput.innerHTML = `
      <h2>Add your score</h2>
      <div>
        <form action="" class="formInput">
          <input type="text" name="name" id="userName" placeholder="Your name">
          <input type="text" name="score" id="userScore" placeholder="Your score">
          <input type="submit" class="userInputSubmit" value="Submit">
        </form>
      </div>
    `;
  },
};

export default AddScore;