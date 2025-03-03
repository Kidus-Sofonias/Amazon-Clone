import React from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../Currencyformat/CurrencyFormat'
import styles from './Product.module.css'

function ProductCard({ data, flex, renderDesc }) {
  console.log("ProductCard data:", data); // Debugging line
  const { image, title, id, rating, price, description } = data || {}; // Add default empty object to avoid destructuring errors
  return (
    <div className={`${styles.card__container} ${flex ? styles.product__flexed : ""}`}>
      <Link to={`/products/${id}`} className={styles.card__link}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {
          renderDesc && <div style={{maxWidth:"60%"}}>{description}</div> // Add conditional rendering for description
        }
        <div className={styles.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} />{" "}
          {/* Add optional chaining */}
          <small>{rating?.count || 0}</small> {/* Add optional chaining */}
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
