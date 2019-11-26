import React from 'react';

const Allergens = (props) => (
  <div className="">
    {(typeof props.text === Array) ? (<p><strong>Possible Allergens: </strong>{props.text.join(', ')}</p>): (<p><strong>Possible Allergens: </strong>{props.text}</p>)}
  </div>
);

export default Allergens;