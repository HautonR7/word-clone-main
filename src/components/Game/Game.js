import React, { Fragment } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import VictoryBanner from "../VictoryBanner/VictoryBanner";
import DefeatBanner from "../DefeatBanner/DefeatBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  const isWon = guesses.includes(answer);

  const isDisabled = guesses.length >= NUM_OF_GUESSES_ALLOWED || isWon;

  return (
    <Fragment>
      <GuessResults guesses={guesses} solution={answer} />
      <GuessInput addGuess={addGuess} isDisabled={isDisabled} />
      {isWon && <VictoryBanner guessNb={guesses.length} />}
      {guesses.length >= NUM_OF_GUESSES_ALLOWED && !isWon && (
        <DefeatBanner answer={answer} />
      )}
    </Fragment>
  );
}

export default Game;
