import React from 'react';

const Allergens = (props) => (
  <div className="">
    <p><strong>Possible Allergens: </strong>{props.allergens.join(', ')}</p>
  </div>
);

export default Allergens;