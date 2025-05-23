import React from "react";
import BannerImg from "../../assets/woman/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import "./Banne.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-grid">
          {/* Image section */}
          <div data-aos="zoom-in" className="banner-image-wrapper">
            <img src={BannerImg} alt="" className="banner-image" />
          </div>

          {/* Text section */}
          <div className="banner-text">
            <h1 data-aos="fade-up" className="banner-title">
              Winter Sale upto 50% Off
            </h1>
            <p data-aos="fade-up" className="banner-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="banner-features">
              <div data-aos="fade-up" className="banner-feature">
                <GrSecure className="banner-icon violet" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="banner-feature">
                <IoFastFood className="banner-icon orange" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="banner-feature">
                <GiFoodTruck className="banner-icon green" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="banner-feature">
                <GiFoodTruck className="banner-icon yellow" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
