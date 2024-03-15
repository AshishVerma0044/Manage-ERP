// ProductManagementPage.js
import React, { useState } from 'react';
import './ProductManagementPage.css';

const initialProducts = [
  { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stock: 100 },
  { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stock: 200 },
  { id: 3, name: 'Product 3', category: 'Category 3', price: 30, stock: 150 },
];
const ProductManagementPage
 = () => {
  const [products, setProducts] = useState(initialProducts);

  // Function to add a new product
  const addProduct = () => {
    // Implement logic to add a new product
  };

  // Function to edit a product
  const editProduct = (id) => {
    // Implement logic to edit a product
  };

  // Function to delete a product
  const deleteProduct = (id) => {
    // Implement logic to delete a product
  };

  return (
    <div className="product-list">
      <h2>Products Management</h2>
      <button onClick={addProduct}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => editProduct(product.id)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementPage
;
