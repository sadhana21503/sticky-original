import React from 'react';
import Productcard from './productcard';
import productData from './productData';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const ProductContainer = () => {
  return (
    <div className="App">
      <Navbar/>
      {productData.map((data, index) => (
        <Productcard data={data}/>
      ))}
       <Footer/>
    </div>
   

  );
};

export default ProductContainer;