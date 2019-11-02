import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/dashboard';
import Header from './Header/header';
import WishLists from './Wishlists/wishLists';
import Cart from './Cart/carts';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/cartList" component={Cart}></Route>
          <Route path="/wishList" component={WishLists}></Route>
          <Route path="/" component={Dashboard}></Route>  
        </Switch>
        
      
      
    </div>
  );
}

export default App;
