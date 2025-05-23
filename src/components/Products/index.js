import React from "react";
import Img1 from "../../assets/woman/women.png";
import Img2 from "../../assets/woman/women2.jpg";
import Img3 from "../../assets/woman/women3.jpg";
import Img4 from "../../assets/woman/women4.jpg";
import { FaStar } from "react-icons/fa6";
import "./Products.css";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="products">
      <div className="products-container">
        <div className="products-header">
          <p className="products-subtitle">Top Selling Products for you</p>
          <h1 className="products-title">Products</h1>
          <p className="products-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>

        <div className="products-grid_container">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="product-card"
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
            >
              <img src={data.img} alt="" className="product-img" />
              <div className="product-info">
                <h3 className="product-title">{data.title}</h3>
                <p className="product-color">{data.color}</p>
                <div className="product-rating">
                  <FaStar className="star-icon" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-button-wrapper">
          <button className="products-button">View All Button</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
