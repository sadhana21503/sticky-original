import React from 'react';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Product from './components/product/ProductContainer'


const App = () => {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Product/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
