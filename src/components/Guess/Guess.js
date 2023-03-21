import React from "react";

function Guess({ value, result }) {
  return (
    <p className="guess">
      <span className={result ? `cell ${result[0].status}` : "cell"}>
        {value[0] ?? ""}
      </span>
      <span className={result ? `cell ${result[1].status}` : "cell"}>
        {value[1] ?? ""}
      </span>
      <span className={result ? `cell ${result[2].status}` : "cell"}>
        {value[2] ?? ""}
      </span>
      <span className={result ? `cell ${result[3].status}` : "cell"}>
        {value[3] ?? ""}
      </span>
      <span className={result ? `cell ${result[4].status}` : "cell"}>
        {value[4] ?? ""}
      </span>
    </p>
  );
}

export default Guess;
