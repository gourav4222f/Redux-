import React from 'react';

import AllProduct from "./component/AllProduct";
import Deleteproducts from "./component/Deleteproducts";
import NewProduct from "./component/NewProduct";
import Oneproduct from "./component/Oneproduct";
import Updatedata from "./component/Updatedata";

export default function App() {
  return (
    <div className="container">
      <h1>Welcome to deduX</h1>
      <br />
      <div className={`section delete`} style={{ backgroundColor: 'lightblue', textAlign: 'center', display: 'flex', justifyContent:'center', alignItems: 'center' ,gap:'100px' }}>
        <span>delete data btn</span>
        <Deleteproducts />
      </div>
      <div className={`section add`} style={{ backgroundColor: 'lightgreen', textAlign: 'center', display: 'flex', justifyContent:'center', alignItems: 'center' ,gap:'100px' }}>
        <span>add data btn</span>
        <NewProduct />
      </div>
      <div className={`section update`} style={{ backgroundColor: 'lightyellow', textAlign: 'center', display: 'flex', justifyContent:'center', alignItems: 'center' ,gap:'100px' }}>
        <span>update data btn</span>
        <Updatedata />
      </div>
      <div className={`section one-product`} style={{ backgroundColor: 'lightpink', textAlign: 'center', display: 'flex', justifyContent:'center', alignItems: 'center' ,gap:'100px' }}>
        <span>one product</span>
        <Oneproduct />
      </div>
      <div className={`section all-products`} style={{ backgroundColor: 'lightgray', textAlign: 'center', display: 'flex', justifyContent:'center', alignItems: 'center' ,gap:'100px' }}>
        <span>all product</span>
        <AllProduct />
      </div>
      <br />
    </div>
  );
}
