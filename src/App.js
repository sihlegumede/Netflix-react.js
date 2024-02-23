import React from 'react';
import './App.css';

import {Article, Navbar, Search} from './components';
import {Footer,Questions} from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='App'>
      <div className="bg_image">
        <Navbar />
        <Search />
      </div>
        <hr />
        <Article />
        <hr />
        <Questions />
        <hr />
        <Footer />
    </div>
  )
}

export default App