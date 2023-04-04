import "./CustomerRewardsForm.css";
import React, { useState } from "react";

function CustomerRewardsForm(props) {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // fetch(`/mockapigoeshere?email-${email}`)
    // .then(response => response.json())
    // .then(data => {
    //   props.updateRewards(data.rewardsPoints);
    // })
    // .catch(error => console.error(error))

    // Currently, no api can be hit, so the following works as a stubb for testing purposes.
    props.updateRewards(42);
  }
  function handleChange(e) {
    setEmail(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-input">
        Enter your email please.
        <input type="text" id="email" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CustomerRewardsForm;
