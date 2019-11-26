import React, { Component } from 'react';

class ProductForm extends Component {
  handleNameChange = (e) => (this.props.onNameChange(e.target.value));

  handleIngredientsChange = (e) =>
  (this.props.onIngredientsChange(e.target.value));
  
  handleReset = (e) => {
    e.preventDefault();
    alert('you have clicked handle reset!');
  };

  // onReset = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     name: '',
  //     ingredients: ''
  //   });
  // };

  render() {
    return(
      <div className={this.props.className}>
        <form onSubmit={this.onSubmit}>
          <h3 className="title is-3 has-text-centered">Product {this.props.id}</h3>
            <div>
            <div className="field">
              <label className="label">Name:</label>
              <input
                className="input"
                type="text"
                name="prodName"
                placeholder="Product Name"
                value={this.props.name}
                onChange={this.props.onNameChange}
              />
            </div>

            <div className="field">
              <label className="label">Ingredients:</label>
              <textarea
                className="textarea"
                name="ingredients"
                placeholder="Product Ingredients"
                value={this.props.ingredients}
                onChange={this.props.onIngredientsChange}
              />
            </div>
            
            </div>
            <div className="buttonBox">
              <button
                onClick={this.handleReset}
                className="button">
                  Clear product details
              </button>
            </div>
            
          </form>
        </div>
    )
  }
}
export default ProductForm;