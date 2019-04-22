import React from 'react';
import ProductForm from '../ProductForm';
import AllergyButtons from './AllergyButtons';
import { compareProducts, convertToArray } from '../../selectors/allergy-utils.js';

// TODO:
// - REMOVE THE 'SUBMIT PROD DETAILS' BTN FOR EACH PRODUCT FORM
// - FIX THE COMPARE PRODUCTS FUNC & BTN
// - WIRE UP THE 'CLEAR EVERYTHING' BUTTON
// - WIRE UP 'ADD ANOTHER PRODUCT' BTN

class Allergy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfProd: 2,
      productsList: [],
      allergens: [],
      error: '',
      compareClicked: false
    };
  }

  handleAddProduct = () => {
    alert('AddProduct button was clicked!');
  }

  handleClear = () => {
    alert('clear everything button was clicked!');
  }

  onSubmitProducts = (product) => {
    this.setState((prevState) => ({
      products: (prevState.products.concat(product)),
    }));
  }

  handleCompareProducts = (e) => {
    e.preventDefault();
    this.setState({
      error: ''
    });
    let comparingList = [];
    let result = compareProducts(comparingList[0], comparingList[1]);

      this.state.products.forEach((element) => {
        comparingList.push(convertToArray(element.ingredients));
      });
      console.log("allergens are: ", result);
      return (result ? 
        this.setState({
          allergens: result,
          compareClicked: true
        }) :
        this.setState({
          error: 'No matching ingredients found',
          compareClicked: true
        })
      );
  }

  render() {
    return (
      <section className="section">
        <div className="allergyContainer">
        {/* COMMENT: make a forEach loop to generate productform component? */}
          <ProductForm
            number={1}
            compareClicked={this.state.compareClicked}
            onSubmitProducts={this.onSubmitProducts} 
          />
          <ProductForm 
            number={2}
            compareClicked={this.state.compareClicked}
            onSubmitProducts={this.onSubmitProducts}
          />
        </div>
        <AllergyButtons 
          handleAddProduct = {this.handleAddProduct}
          handleClear = {this.handleClear}
          handleCompareProducts = {this.handleCompareProducts}
        />
        <div className="has-text-centered">
          {this.state.compareClicked && (this.state.error ? <p className="has-text-danger">{this.state.error}</p> : <p>Possible Allergens are: {this.state.allergens}</p>)}
        </div>
      </section>
    );
  }
}

export default Allergy;