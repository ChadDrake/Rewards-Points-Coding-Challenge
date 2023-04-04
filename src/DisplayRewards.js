import React from "react";
import "./DisplayRewards.css";

function DisplayRewards(props) {
  function handleButtonClick() {
    props.updateRewards(null);
  }
  return (
    <div className="main-display">
      You currently have {props.rewards} reward points! Thank you for being a
      loyal customer.
      <button className="back-button" onClick={handleButtonClick}>
        Go Back
      </button>
    </div>
  );
}

export default DisplayRewards;
