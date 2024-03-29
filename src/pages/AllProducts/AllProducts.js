import React, { useEffect, useState } from "react";
import Product from "../Home/Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://power-tools-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="px-20 pt-20 pb-6 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {products.map((product) => (
          <Product key={product.name} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
