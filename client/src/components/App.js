import React, { Component } from 'react';
import AllergyTool from './AllergyTool/AllergyTool';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container is-fluid content">
          <Header />
          <AllergyTool />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
