import React from 'react';

const AllergyButtons = (props) => (
  <div className="section has-text-centered">
    <button 
      className="button is-light"
      onClick={props.handleAddProduct}>Add another product
    </button>
    <button
      className="button is-warning button--margin-left"
      onClick={props.handleClear}>Clear everything</button>
    <input
      className="button is-primary button--margin-left"
      type="submit"
      value="Compare products"
      onClick={props.handleCompareProducts} />
  </div>
);

export default AllergyButtons;