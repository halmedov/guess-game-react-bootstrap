import React, { useState } from "react";

function Game() {
  const [n, setN] = useState(Math.floor(Math.random() * 20));
  const [guess, setGuess] = useState();
  const [guessedNumber, setGuessedNumber] = useState(-1);
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuessedNumber((e) => {
      return guess;
    });
    setScore(() => {
      return score - 1;
    });
  };

  const handleClick = () => {
    setN(() => {
      return Math.floor(Math.random() * 20);
    });
    setHighScore((prevScore) => {
      return prevScore > score ? prevScore : score;
    });
    setScore(() => {
      return 20;
    });
    setGuessedNumber((guessedNumber) => {
      return (guessedNumber = null);
    });
  };

  const equality = (
    <div>
      <h2>Congratulation</h2>
      <button type="reset" className="btn btn-success" onClick={handleClick}>
        Play Again!
      </button>
    </div>
  );

  const myForm = (
    <form className="guess ">
      <h2>Start Guessing</h2>
      <p>Enter a number between 1 and 20</p>
      <input
        value={guess}
        type="number"
        placeholder="Your Guess:"
        onChange={(e) => setGuess(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Check!
      </button>
    </form>
  );

  return (
    <div className="row">
      <div className="col-3">
        {myForm}
        <div className="helper">
          {guessedNumber < n
            ? " Hint: Higher"
            : guessedNumber > n
            ? "Hint: Lower"
            : ""}
        </div>
        <div className="right-guess">
          {guessedNumber == n ? <h2> {n} </h2> : <h2>?</h2>}
        </div>
      </div>
      <div className="result col-3">
        <h2>Your Result</h2>
        <p>Your Score: {score} </p>
        <p>High Score: {highScore}</p>
        <>{guessedNumber == n ? equality : ""}</>
      </div>
    </div>
  );
}

export default Game;
