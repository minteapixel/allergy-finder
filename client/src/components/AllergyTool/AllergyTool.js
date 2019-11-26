import React, { Component }  from 'react';
import ProductForm from './ProductForm';
import Buttons from './Buttons';
import { sanitizeInput, compareProducts, convertToArray } from '../../controllers/allergy-utils.js';

let initialState = {
  allergens: [],
  compareClicked: false,
  error: '',
  products: []
};

class AllergyTool extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // clearing ALL product forms = back to initial state
  handleClearAll = () => {
    this.setState(() => (initialState));
    return alert('you clicked the clear everything button');
  }

  // === methods for product forms
  // parameters: id, name, ingredients
  handleNameChange = (e) => {
    let name = e.target.value;
    console.log('product name: ' +  sanitizeInput(name));
    // this.setState({
    //   products.id == id ? products.1(replace);
    // });
  };

  handleIngredientsChange = (e) => {
    const ingredients = e.target.value;
    console.log('ingredients: ' + e.target.value);
  };

  // === resetting just ONE of the product forms
  handleReset = (e) => {
    e.preventDefault();
    // sanitizeInput(ingredients);
    this.setState({
      name: '',
      ingredients: ''
    });
  };

  handleCompareProducts = (e) => {
    e.preventDefault();
    alert('You clicked on the compare button!')
    ;
    this.setState(() => ({
      compareClicked: true,
      products: [...this.state.products]
    }));
  }

  render() {
    return (
      <section className="section">
        <div className="allergyContainer">
          <ProductForm
            formId={1}
            compareClicked={this.state.compareClicked}
            className='productForm productForm--marginRight'
            onNameChange={this.handleNameChange}
            onIngredientsChange={this.handleIngredientsChange}
          />
          <ProductForm 
            formId={2}
            compareClicked={this.state.compareClicked}
            className='productForm'
            onNameChange={this.handleNameChange}
            onIngredientsChange={this.handleIngredientsChange}
          />
        </div>
        <Buttons 
          onHandleClearAll = {this.handleClearAll}
          onHandleCompareProducts = {this.handleCompareProducts}
        />
        <div className="has-text-centered">
          {this.state.compareClicked && (this.state.error ? <p className="has-text-danger">{this.state.error}</p> : <p>Possible Allergens are: {this.state.allergens}</p>)}
        </div>
      </section>
    );
  }
}

export default AllergyTool;