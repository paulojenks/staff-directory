import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Staff from './Staff';
import Header from './Header';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={ Home } />
      <Route path="/about" component= { About }/>
      <Route path="/staff" component= { Staff }/>
    </div>
  </BrowserRouter>
);

export default App;
