import React from 'react';
import BannerCarosel from '../src/Component/Banner/'
import Search from '../src/Component/Search'
import Category from '../src/Component/Category'
import Product from '../src/Component/Product'

function App() {
  return (
    <div >
      <Search title="Search"/>
      <BannerCarosel title="Banner"/>
      <Category title="Category"/>
      <Product title="Product"/>
    </div>
  );
}

export default App;
