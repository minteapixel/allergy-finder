import React, { Component }  from 'react';
import ProductForm from './ProductForm';
import Buttons from './Buttons';
import Allergens from './Allergens';
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

  // clearing ALL product forms = back to initial state
  handleClearAll = () => {
    this.setState(() => (initialState));
  }

  // === methods for product forms
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

  // === resetting just ONE of the product forms
  handleResetOne = (e) => {
    e.preventDefault();
    return alert('you have clicked on product form clear button!');
    // sanitizeInput(ingredients);
    // this.setState({
    //   name: '',
    //   ingredients: ''
    // });
  };

  // === comparing products
  handleCompareProducts = (e) => {
    let arr1=convertToArray(this.state.products[0].ingredients);
    let arr2=convertToArray(this.state.products[1].ingredients);
    e.preventDefault();
    this.setState(() => ({
      compareClicked: true,
      allergens: compareProducts(arr1, arr2)
    }));
    return console.log(compareProducts(arr1, arr2));
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
          onHandleClearAll = {this.handleClearAll}
          onHandleCompareProducts = {this.handleCompareProducts}
        />
        <div className="has-text-centered">
          {this.state.error && <p className="has-text-danger">{this.state.error}</p>}
          {this.state.allergens &&  <Allergens allergens={this.state.allergens} />}
        </div>
      </section>
    );
  }
}

export default AllergyTool;