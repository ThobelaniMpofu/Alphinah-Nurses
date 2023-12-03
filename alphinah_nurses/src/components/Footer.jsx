import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  
} from "react-icons/ai";
//import "../components-styles/footerStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
            <h3>Home Store</h3>
      
          <div className="elementsColumn">
            
            <div>
              <b>Company</b>
              <p>About</p>
             
            </div>
            <div>
              <b>Shop with us</b>
              <p>Decor</p>
              <p>Furniture</p>
            </div>
            <div>
              <b>Our Values</b>
              <p>Love</p>
              <p>Qaulity</p>
              <p>Integrity</p>
              <p>Reliability</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;