import React from "react";

const Form = props => (
  <div>
    <h2>Find Your Location</h2>
    <input
      className="form__input"
      type="text"
      id="locationName"
      placeholder="country name"
    />
    <button className="form__button" onClick={props.getForcast}>
      Search
    </button>
  </div>
);

export default Form;
