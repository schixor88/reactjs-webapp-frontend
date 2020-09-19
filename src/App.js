import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Product from './components/pages/ProductPage/Product';
import Service from './components/pages/ServicePage/Service';
import Signup from './components/pages/SignupPage/Signup';


function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/products' exact component={Product}/>
       <Route path='/services' exact component={Service}/>
       <Route path='/sign-up' exact component={Signup}/>
     </Switch>
     <Footer/>
     </Router>
  );
}

export default App;
