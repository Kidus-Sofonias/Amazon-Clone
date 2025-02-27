import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css"

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={styles.product__container}>
      {product.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </section>
  );
}

export default Product;
