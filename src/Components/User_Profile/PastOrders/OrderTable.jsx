import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ordersData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  product: `Product ${i + 1}`,
  description: `Description ${i + 1}`,
  orderedOn: new Date(2025, 1, i + 1).toISOString().split("T")[0],
  price: `$${(i + 1) * 10}`,
}));

const OrderTable = () => {
  const [filter, setFilter] = useState("all");

  const filterOrders = () => {
    const today = new Date();
    return ordersData.filter((order) => {
      const orderDate = new Date(order.orderedOn);
      const diffTime = today - orderDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      if (filter === "weekly") return diffDays <= 7;
      if (filter === "monthly") return diffDays <= 30;
      return true;
    });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 mt-5">Past Orders</h3>

      <div className="d-flex justify-content-between mb-2">
        <label className="fw-bold">
          Filter:
          <select
            className="form-select d-inline-block w-auto ms-2"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="weekly">Last 7 Days</option>
            <option value="monthly">Last 30 Days</option>
          </select>
        </label>
      </div>

      <div className="table-responsive border rounded">
        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          <table className="table table-bordered table-striped text-center">
            <thead className="table-light">
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Product Name</th>
                <th scope="col">Description</th>
                <th scope="col">Ordered on</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {filterOrders().slice(0, 10).map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.product}</td>
                  <td>{order.description}</td>
                  <td>{order.orderedOn}</td>
                  <td>{order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
