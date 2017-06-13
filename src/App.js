import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Footer from './Footer'
import Article from './Article'
import Aside from './Aside'
import OtherArticles from './OtherArticles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Article />
          <Aside />

          <OtherArticles />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
