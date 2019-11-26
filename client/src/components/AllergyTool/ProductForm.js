import React, { Component } from 'react';

class ProductForm extends Component {
  render() {
    return(
      <div className={this.props.className}>
        <form onSubmit={this.onSubmit}>
          <h3 className="title is-3 has-text-centered">Product {this.props.formId}</h3>
            <div>
            <div className="field">
              <label className="label">Name:</label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Product Name"
                value={this.props.name}
                onChange={(e) => this.props.onNameChange(this.props.formId, e)}
              />
            </div>

            <div className="field">
              <label className="label">Ingredients:</label>
              <textarea
                className="textarea"
                name="ingredients"
                placeholder="Product Ingredients"
                value={this.props.ingredients}
                onChange={(e) => this.props.onIngredientsChange(this.props.formId, e)}
              />
            </div>
            
            </div>
            <div className="buttonBox">
              <button
                onClick={(e) => this.props.onHandleReset(this.props.formId, e)}
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