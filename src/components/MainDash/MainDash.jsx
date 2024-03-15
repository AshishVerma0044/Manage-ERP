import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import ProductManagementPage from "../ProductManagementPage"; // Import ProductManagementPage
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
      {/* Include the ProductManagementPage component */}
      <ProductManagementPage />

    </div>
  );
};

export default MainDash;
