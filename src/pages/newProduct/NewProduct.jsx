import './newProduct.css'
import React from 'react';


const NewProduct = () => {
    return(
        <div className="newProduct">
            <h1 className="newProductTitle">Add New Product</h1>

<form  className="newProductForm">
  
    <div className="newProductItem">
        <label>Product Name</label>
        <input type="text" placeholder="Mac Air book" />
    </div>
    <div className="newProductItem">
        <label>Serial Number</label>
        <input type="text" placeholder="51255555" />
    </div>
    <div className="newProductItem">
        <label>Category</label>
        <input type="email" placeholder="electronics" />
    </div>
    <div className="newProductItem">
        <label>Description</label>
        <input type="text" placeholder="Something about the product" />
    </div>
   
    <div className="ProductItemAvatar">
        <label>IMage</label>
        <input type="file" />
    </div>
   
    <button className="newProductButton">Create</button>
</form>
        </div>
    )
}
export default NewProduct;