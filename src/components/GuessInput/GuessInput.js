import React, { Fragment } from "react";

function GuessInput({ addGuess, isDisabled }) {
  const [guess, setGuess] = React.useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && /^[a-zA-Z]{5}$/.test(guess)) {
      handleSubmit(event);
      setGuess("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGuess(guess);
  };

  return (
    <Fragment>
      <form className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          pattern="[a-zA-Z]{5}"
          title="It must be 5 letters."
          required
          disabled={isDisabled}
        />
      </form>
    </Fragment>
  );
}

export default GuessInput;
