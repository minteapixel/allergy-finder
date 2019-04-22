import React, { Component } from 'react';
import Allergy from './AllergyTool/Allergy';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <Header />
        <Allergy />
        <Footer />
      </div>
    );
  }
}

export default App;
