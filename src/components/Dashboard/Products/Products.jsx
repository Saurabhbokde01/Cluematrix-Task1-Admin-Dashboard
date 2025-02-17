import "./Products.css";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import product_1 from "../../../assets/product_1.png"

const productData = {
  ProductA: {
    image: {product_1},
    sales: [
      { month: "Jan", sales: 400 },
      { month: "Feb", sales: 300 },
      { month: "Mar", sales: 500 },
      { month: "Apr", sales: 200 },
      { month: "May", sales: 450 },
      { month: "Jun", sales: 350 },
      { month: "Jul", sales: 600 },
      { month: "Aug", sales: 550 },
      { month: "Sep", sales: 400 },
      { month: "Oct", sales: 500 },
      { month: "Nov", sales: 300 },
      { month: "Dec", sales: 250 },
    ],
  },
  ProductB: {
    image: "https://via.placeholder.com/50",
    sales: [
      { month: "Jan", sales: 500 },
      { month: "Feb", sales: 400 },
      { month: "Mar", sales: 450 },
      { month: "Apr", sales: 300 },
      { month: "May", sales: 600 },
      { month: "Jun", sales: 500 },
      { month: "Jul", sales: 700 },
      { month: "Aug", sales: 650 },
      { month: "Sep", sales: 450 },
      { month: "Oct", sales: 550 },
      { month: "Nov", sales: 350 },
      { month: "Dec", sales: 400 },
    ],
  },
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState("ProductA");

  return (
    <div className="products">
      <h2>Product Sales Overview</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(productData).map((product) => (
            <tr key={product}>
              <td>{product}</td>
              <td><img src={productData[product].image} alt={product} className="product-image" /></td>
              <td>
                <button className="view-graph-btn" onClick={() => setSelectedProduct(product)}>View Graph</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="chart-container">
        <h3>{selectedProduct} Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={productData[selectedProduct].sales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Products;
