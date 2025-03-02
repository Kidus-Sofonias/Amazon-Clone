import React, { useEffect, useState } from 'react'
import styles from './ProductDetail.module.css'
import Layout from '../../Components/Layout/Layout'
import { productUrl } from '../../Api/endPoint'
import ProductCard from '../../Components/Product/ProductCard'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null

  useEffect(() => {
    const url = `${productUrl}/products/${productId}`;
    console.log("Requesting URL:", url); // Debugging line

    axios.get(url)
      .then((res) => {
        console.log("Fetched product data:", res.data); // Debugging line
        setProduct(res.data);
      }).catch((err) => {
        console.log("Product Error:", err); // Improved error logging
      });
  }, [productId]); // Add productId as a dependency

  if (!product) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <Layout>
        <ProductCard data={product} />
    </Layout>
  );
}

export default ProductDetail;