import React, { Component }  from 'react';
import ProductForm from './ProductForm';
import Buttons from './Buttons';
import Allergens from './Allergens';
import Error from './Error';
import { sanitizeInput, compareProducts, convertToArray } from '../../controllers/allergy-utils.js';

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
    const name = sanitizeInput(e.target.value);
    this.setState(prevState => ({
      products: prevState.products.map(el => el._id === id ? { ...el, name } : el)
    }));
  };

  handleIngredientsChange = (id, e) => {
    const ingredients = sanitizeInput(e.target.value);
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
    let allergensAnswer = compareProducts(arr1, arr2);
    if (allergensAnswer.error) {
      this.setState(() => ({
        compareClicked: true,
        allergens: '',
        error: allergensAnswer.error
      }));
    } else {
      this.setState(() => ({
        compareClicked: true,
        allergens: (allergensAnswer.length > 0) ? allergensAnswer : 'None - no matching items.',
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
              compareClicked={this.state.compareClicked}
              className='productForm productForm--marginRight'
              onNameChange={this.handleNameChange}
              onIngredientsChange={this.handleIngredientsChange}
              onHandleReset={this.handleResetOne}
              name={this.state.products[0].name}
              ingredients={this.state.products[0].ingredients}
            />
            <ProductForm 
              formId={2}
              compareClicked={this.state.compareClicked}
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
          {this.state.error && <Error text={this.state.error}/>}
          {this.state.allergens &&  <Allergens text={this.state.allergens} />}
        </section>
      </div>
    );
  }
}

export default AllergyTool;