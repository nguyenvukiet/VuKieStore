import React from 'react'

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Checkout from '../pages/Checkout'
import About from '../pages/About'
import Register from '../pages/Register'
import Policy from '../pages/Policy';



const Routes = () => {
  return (
   <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/catalog/:slug' component={Product}/>
      <Route path='/catalog' component={Catalog}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/login' component={Login}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/checkout' component={Checkout}/>
      <Route path='/about' component={About}/>
      <Route path='/register' component={Register}/>
      <Route path='/policy' component={Policy}/>
   </Switch>
  )
}

export default Routes
