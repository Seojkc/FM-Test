import React, { useEffect, useState } from "react";
import './../cssFiles/ProductsPage.css'


export default function ProductsPage() {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function productNameFile(name){
    return require('.//..//MediaFiles//products//'+name+'.jpg');
  } 
  const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const response = await res.json();
    setProducts(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {isLoading ? (
        "Getting Products..."
      ) : (
        <div style={{width:"90%", margin:"10px auto"}}>
          <h3 className="productHeading">Products</h3>
          <div className="outer-container">
          {products.map((product, index) => (
                <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                      <div className="container-item">
                      <img className="item-image" src={productNameFile(product.name)} width="300px" height="400px"/>
                      <h2 className="item-heading">{product.name}</h2>
                      
                      
                    
                      
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div className="container-item">
                        <h2 className="item-heading">{product.name}</h2>
                        <h3  className="item-description">{product.description}</h3>
                        <h2  className="item-price">${product.price}</h2>
                        
                      
                        
                      </div>
                  </div>
                </div>
              </div>
                


              ))}
          </div>
          
        </div>
      )}
    </div>
  );
}
