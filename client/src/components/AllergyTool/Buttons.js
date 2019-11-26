import React from 'react';

const Buttons = (props) => (
  <div className="section has-text-centered">
    <button
      className="button is-warning button--margin-left"
      onClick={props.onHandleClearAll}>Clear everything</button>
    <input
      className="button is-primary button--margin-left"
      type="submit"
      value="Compare products"
      onClick={props.onHandleCompareProducts} />
  </div>
);

export default Buttons;