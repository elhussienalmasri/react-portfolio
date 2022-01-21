
import React from 'react';
import { products } from "../../data";
import Product from "../product/Product"
import "./productList.css";

const ProductList = () => {
  return (
    <div className="projects" >
        <h2 className="title ">Projects</h2>
        <div class="content">
         {products.map((item) => (
           <Product key={item.id} img={item.image} title={item.title} 
            category={item.category} anch={item.anch} />
         ))}
       </div>
      
      </div>)
};

export default ProductList;



