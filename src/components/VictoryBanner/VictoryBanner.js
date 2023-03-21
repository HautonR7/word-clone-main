import React from "react";

function VictoryBanner({ guessNb }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessNb} guess{guessNb > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </div>
  );
}

export default VictoryBanner;
