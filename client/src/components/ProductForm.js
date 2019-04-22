import React from 'react';

class ProductForm extends React.Component {
  state = {
    name: '',
    ingredients: ''
  }
  
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onIngredientsChange = (e) => {
    const ingredients = e.target.value;
    this.setState(() => ({ ingredients }));
  };

  onReset = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      ingredients: ''
    });
  };

  render() {
    return(
      <div className="productForm">
        <form onSubmit={this.onSubmit}>
          <h3 className="title is-3 has-text-centered">Product {this.props.number}</h3>
            <div>
            <div className="field">
              <label className="label">Name:</label>
              <input
                className="input"
                type="text"
                name={"p-name-" + this.props.number}
                placeholder="Product Name"
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </div>

            <div className="field">
              <label className="label">Ingredients:</label>
              <textarea
                className="textarea"
                name={"p-ingre-" + this.props.number}
                placeholder="Product Ingredients"
                value={this.state.ingredients}
                onChange={this.onIngredientsChange}
              />
            </div>
            
            </div>
            <div className="buttonBox">
              <button
                onClick={this.onReset}
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