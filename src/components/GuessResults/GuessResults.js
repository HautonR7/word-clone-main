import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, solution }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((line) => {
        const result = guesses[line]
          ? checkGuess(guesses[line], solution)
          : null;
        return (
          <Guess
            key={Math.random()}
            value={guesses[line] ?? ""}
            result={result}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
