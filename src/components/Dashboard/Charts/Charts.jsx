import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import product_1 from "../../../assets/product_1.png"
import product_2 from "../../../assets/product_2.png"
import product_3 from "../../../assets/product_3.png"
import product_4 from "../../../assets/product_4.png"
import product_5 from "../../../assets/product_5.png"
import product_6 from "../../../assets/product_6.png"
import product_7 from "../../../assets/product_7.png"
import product_8 from "../../../assets/product_8.png"
import product_9 from "../../../assets/product_9.png"
import product_10 from "../../../assets/product_10.png"
import "./Charts.css";

const productData = {
  ProductA: {
    image: product_1,
    sales: [
      { month: "Jan", revenue: 4200 },
      { month: "Feb", revenue: 3700 },
      { month: "Mar", revenue: 5100 },
      { month: "Apr", revenue: 6200 },
      { month: "May", revenue: 5600 },
      { month: "Jun", revenue: 7100 },
      { month: "Jul", revenue: 7600 },
      { month: "Aug", revenue: 8200 },
      { month: "Sep", revenue: 6600 },
      { month: "Oct", revenue: 8600 },
      { month: "Nov", revenue: 9100 },
      { month: "Dec", revenue: 9600 }
    ],
  },
  ProductB: {
    image: product_2,
    sales: [
      { month: "Jan", revenue: 4800 },
      { month: "Feb", revenue: 4100 },
      { month: "Mar", revenue: 4600 },
      { month: "Apr", revenue: 3200 },
      { month: "May", revenue: 6300 },
      { month: "Jun", revenue: 5200 },
      { month: "Jul", revenue: 7300 },
      { month: "Aug", revenue: 6700 },
      { month: "Sep", revenue: 4600 },
      { month: "Oct", revenue: 5700 },
      { month: "Nov", revenue: 3800 },
      { month: "Dec", revenue: 4200 }
    ],
  },
  ProductC: {
    image: product_3,
    sales: [
      { month: "Jan", revenue: 5300 },
      { month: "Feb", revenue: 3300 },
      { month: "Mar", revenue: 5900 },
      { month: "Apr", revenue: 4500 },
      { month: "May", revenue: 4500 },
      { month: "Jun", revenue: 6400 },
      { month: "Jul", revenue: 6500 },
      { month: "Aug", revenue: 4800 },
      { month: "Sep", revenue: 6800 },
      { month: "Oct", revenue: 4900 },
      { month: "Nov", revenue: 8900 },
      { month: "Dec", revenue: 3300 }
    ],
  },
  ProductD: {
    image: product_4,
    sales: [
      { month: "Jan", revenue: 5100 },
      { month: "Feb", revenue: 4200 },
      { month: "Mar", revenue: 4700 },
      { month: "Apr", revenue: 3400 },
      { month: "May", revenue: 2200 },
      { month: "Jun", revenue: 1300 },
      { month: "Jul", revenue: 7200 },
      { month: "Aug", revenue: 6600 },
      { month: "Sep", revenue: 5700 },
      { month: "Oct", revenue: 6600 },
      { month: "Nov", revenue: 7700 },
      { month: "Dec", revenue: 5100 }
    ],
  },
  ProductE: {
    image: product_5,
    sales: [
      { month: "Jan", revenue: 4900 },
      { month: "Feb", revenue: 5000 },
      { month: "Mar", revenue: 6500 },
      { month: "Apr", revenue: 7300 },
      { month: "May", revenue: 4000 },
      { month: "Jun", revenue: 3000 },
      { month: "Jul", revenue: 3100 },
      { month: "Aug", revenue: 6400 },
      { month: "Sep", revenue: 7600 },
      { month: "Oct", revenue: 4500 },
      { month: "Nov", revenue: 6600 },
      { month: "Dec", revenue: 5000 }
    ],
  },
  ProductF: {
    image: product_6,
    sales: [
      { month: "Jan", revenue: 5200 },
      { month: "Feb", revenue: 4400 },
      { month: "Mar", revenue: 4800 },
      { month: "Apr", revenue: 1600 },
      { month: "May", revenue: 2400 },
      { month: "Jun", revenue: 3400 },
      { month: "Jul", revenue: 4500 },
      { month: "Aug", revenue: 5800 },
      { month: "Sep", revenue: 6800 },
      { month: "Oct", revenue: 3900 },
      { month: "Nov", revenue: 4900 },
      { month: "Dec", revenue: 5200 }
    ],
  },
  ProductG: {
    image: product_7,
    sales: [
      { month: "Jan", revenue: 7400 },
      { month: "Feb", revenue: 6600 },
      { month: "Mar", revenue: 5900 },
      { month: "Apr", revenue: 4700 },
      { month: "May", revenue: 3700 },
      { month: "Jun", revenue: 2600 },
      { month: "Jul", revenue: 1800 },
      { month: "Aug", revenue: 7000 },
      { month: "Sep", revenue: 6900 },
      { month: "Oct", revenue: 5100 },
      { month: "Nov", revenue: 4000 },
      { month: "Dec", revenue: 3400 }
    ],
  },
  ProductH: {
    image: product_8,
    sales: [
      { month: "Jan", revenue: 5000 },
      { month: "Feb", revenue: 4200 },
      { month: "Mar", revenue: 3600 },
      { month: "Apr", revenue: 4400 },
      { month: "May", revenue: 5300 },
      { month: "Jun", revenue: 6200 },
      { month: "Jul", revenue: 2200 },
      { month: "Aug", revenue: 7600 },
      { month: "Sep", revenue: 4700 },
      { month: "Oct", revenue: 7600 },
      { month: "Nov", revenue: 6800 },
      { month: "Dec", revenue: 5200 }
    ],
  },
  ProductI: {
    image: product_9,
    sales: [
      { month: "Jan", revenue: 7200 },
      { month: "Feb", revenue: 6400 },
      { month: "Mar", revenue: 5800 },
      { month: "Apr", revenue: 7600 },
      { month: "May", revenue: 8500 },
      { month: "Jun", revenue: 5400 },
      { month: "Jul", revenue: 6500 },
      { month: "Aug", revenue: 7800 },
      { month: "Sep", revenue: 6800 },
      { month: "Oct", revenue: 5900 },
      { month: "Nov", revenue: 6900 },
      { month: "Dec", revenue: 7300 }
    ],
  },
  ProductJ: {
    image: product_10,
    sales: [
      { month: "Jan", revenue: 7500 },
      { month: "Feb", revenue: 2700 },
      { month: "Mar", revenue: 6000 },
      { month: "Apr", revenue: 3800 },
      { month: "May", revenue: 5900 },
      { month: "Jun", revenue: 4700 },
      { month: "Jul", revenue: 5900 },
      { month: "Aug", revenue: 4200 },
      { month: "Sep", revenue: 6100 },
      { month: "Oct", revenue: 3200 },
      { month: "Nov", revenue: 7100 },
      { month: "Dec", revenue: 2500 }
    ],
  }
};


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#D35400", "#5DADE2", "#28B463", "#F4D03F", "#E74C3C", "#00ff26", "#f704d3"];

const Charts = () => {
  const [selectedProduct, setSelectedProduct] = useState("ProductA");

  return (
    <div className="charts-container">
      {/* Product Table */}
      <div className="product-table-container">
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
      </div>

      {/* Line Chart */}
      <div className="chart">
        <h3>{selectedProduct} Revenue</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={productData[selectedProduct].sales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="chart">
      <h3>{selectedProduct} Sales Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie 
            data={productData[selectedProduct].sales} 
            cx="50%" 
            cy="50%" 
            outerRadius={80} 
            fill="#8884d8" 
            dataKey="revenue"
            >
          {productData[selectedProduct].sales.map((entry) => (
          <Cell key={entry.month} fill={COLORS[new Date(entry.month + " 1, 2000").getMonth() % COLORS.length]} />
        ))}
        </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>

    </div>
  );
};

export default Charts;
