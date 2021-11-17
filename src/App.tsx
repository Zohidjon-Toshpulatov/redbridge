import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Global from './pages/global/global';
import Home from './pages/home/home';
import './App.css';
import About from './pages/about/about';
import Products from './pages/products/products';
import Assist from './pages/assist/assist';
import Clients from './pages/clients/clients';

function App() {
  return (
    <div className='bg-white'>
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/global' exact={true}>
          <Global />
        </Route>
        <Route path='/about' exact={true}>
          <About />
        </Route>
        <Route path='/products' exact={true}>
          <Products />
        </Route>
        <Route path='/assist' exact={true}>
          <Assist />
        </Route>
        <Route path='/clients' exact={true}>
          <Clients />
        </Route>
        <Route path='/signin-signup' exact={true}>

        </Route>
        <Route path='/contact' exact={true}>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
