import "./App.css";
import React, { useState } from "react";
import CustomerRewardsForm from "./CustomerRewardsForm";
import DisplayRewards from "./DisplayRewards";

function App() {
  const [rewardsPoints, setRewardsPoints] = useState(null);

  function updateRewards(newRewardsPoints) {
    setRewardsPoints(newRewardsPoints);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Welcome! Please enter your email below to look up your account and
          receive your rewards points total.
        </div>
      </header>
      <body>
        <div>
          {rewardsPoints ? (
            <DisplayRewards
              rewards={rewardsPoints}
              updateRewards={updateRewards}
            />
          ) : (
            <CustomerRewardsForm updateRewards={updateRewards} />
          )}
        </div>
      </body>
    </div>
  );
}

export default App;
