import React from "react";
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../Currencyformat/CurrencyFormat'
import styles from './Product.module.css'

function ProductCard({ data }) {
  return (
    <div className={styles.card__container}>
      <a href="">
        <img src={data.image} alt={data.title} />
      </a>
      <div>
        <h3>{data.title}</h3>
        <div className={styles.rating}>
          <Rating value={data.rating.rate} precision={0.1} />
          <small>{data.rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={data.price} />
        </div>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
