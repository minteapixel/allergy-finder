import React, { Component }  from 'react';
import ProductForm from './ProductForm';
import Buttons from './Buttons';
import Allergens from './Allergens';
import Error from './Error';
import { validateInput, compareProducts, convertToArray } from '../../controllers/allergy-utils.js';

let initialState = {
  allergens: '',
  compareClicked: false,
  error: '',
  products: [
    { _id: 1,
      name: '',
      ingredients: ''
    }, {
    _id: 2,
    name: '',
    ingredients: ''
  }]
};

class AllergyTool extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // ===== clearing ALL product forms = back to initial state
  handleClearAll = () => {
    this.setState(() => (initialState));
  }

  // ===== methods for product forms
  handleNameChange = (id, e) => {
    const name = validateInput(e.target.value);
    this.setState(prevState => ({
      products: prevState.products.map(el => el._id === id ? { ...el, name } : el)
    }));
  };

  handleIngredientsChange = (id, e) => {
    const ingredients = validateInput(e.target.value);
    this.setState(prevState => ({
      products: prevState.products.map(el => el._id === id ? { ...el, ingredients } : el)
    }));
  };

  // ====== resetting just ONE of the product forms
  handleResetOne = (id, e) => {
    e.preventDefault();
    this.setState(prevState => ({
      allergens: '',
      error: '',
      products: prevState.products.map(el => el._id === id ? { ...el, name: '', ingredients: '' } : el)
    }));
  };

  // === comparing products
  handleCompareProducts = (e) => {
    e.preventDefault();
    let arr1=convertToArray(this.state.products[0].ingredients);
    let arr2=convertToArray(this.state.products[1].ingredients);
    let allergensResult = compareProducts(arr1, arr2);
    if (allergensResult.error) {
      this.setState(() => ({
        compareClicked: true,
        allergens: '',
        error: allergensResult.error
      }));
    } else {
      this.setState(() => ({
        compareClicked: true,
        allergens: allergensResult.message,
        error: ''
      }));
    }
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="allergyContainer">
            <ProductForm
              formId={1}
              className='productForm productForm--marginRight'
              onNameChange={this.handleNameChange}
              onIngredientsChange={this.handleIngredientsChange}
              onHandleReset={this.handleResetOne}
              name={this.state.products[0].name}
              ingredients={this.state.products[0].ingredients}
            />
            <ProductForm 
              formId={2}
              className='productForm'
              onNameChange={this.handleNameChange}
              onIngredientsChange={this.handleIngredientsChange}
              onHandleReset={this.handleResetOne}
              name={this.state.products[1].name}
              ingredients={this.state.products[1].ingredients}
            />
          </div>
          <Buttons 
            onHandleClearAll={this.handleClearAll}
            onHandleCompareProducts={this.handleCompareProducts}
          />
        </section>
        <section className="has-text-centered">
          {this.state.error && <Error text={this.state.error} />}
          {this.state.allergens && <Allergens text={this.state.allergens} />}
        </section>
      </div>
    );
  }
}

export default AllergyTool;