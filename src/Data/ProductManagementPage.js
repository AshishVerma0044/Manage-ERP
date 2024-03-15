import React from "react";

// Mock data for products
const products = [
  { id: 1, name: "Product 1", category: "Category 1", price: 10, stock: 100, quantity: 20 },
  { id: 2, name: "Product 2", category: "Category 2", price: 20, stock: 200, quantity: 30 },
  { id: 3, name: "Product 3", category: "Category 3", price: 30, stock: 150, quantity: 25 },
];

const ProductManagementPage = () => {
  return (
    <div>
      <h2>Product Management Page</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementPage;
