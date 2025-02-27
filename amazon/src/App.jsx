import React from "react";
import "./App.css";
import Header from "/src/Components/Header/Header.jsx";
import CarouselEffect from "/src/Components/Carousel/CarouselEffect.jsx";
import Category from "/src/Components/Category/Category.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <CarouselEffect />
      <Category />
    </div>
  );
}
