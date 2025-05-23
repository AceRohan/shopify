import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./Popup.css"; // Import CSS file

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
         
            <div className="popup-header">
              <h1>Order Now</h1>
              <IoCloseOutline
                className="popup-close-icon"
                onClick={() => setOrderPopup(false)}
              />
            </div>

           
            <div className="popup-form">
              <input type="text" placeholder="Name" className="popup-input" />
              <input type="email" placeholder="Email" className="popup-input" />
              <input type="text" placeholder="Address" className="popup-input" />
              <div className="popup-button-wrapper">
                <button className="popup-button">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
