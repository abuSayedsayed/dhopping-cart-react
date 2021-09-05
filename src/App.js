import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Products from './components/Products';
function App() {
  const [products, setProducts] = useState([])
  const updateProducts=(product)=>{
    const productsCopy=[...products]
    productsCopy.push(product)
    setProducts(productsCopy)
  }
  return (
    <Router>
       <NavBar/>
           <Switch>
              <Route path="/cart">
                  <Cart products={products} setProducts={setProducts} updateProducts={updateProducts} />
              </Route>
           <Route path="/">
                  <Products updateProducts={updateProducts}/>
              </Route>
           
        </Switch>
    </Router>
  );
}

export default App;
