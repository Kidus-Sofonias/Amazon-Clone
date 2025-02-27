import React from "react";
import "./App.css";
import Header from "/src/Components/Header/Header.jsx";
import CarouselEffect from "/src/Components/Carousel/CarouselEffect.jsx";
import Category from "/src/Components/Category/Category.jsx";
import Product from "/src/Components/Product/Product.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
}
