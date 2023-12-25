import React from "react";
import "./PricingTable.scss";

const PricingTable = (props) => {
  const buttonStyle = {};

  return (
    <div
     
      className="recommended-domain"
    >
      <div className="title-with-button">
        <div style={{ margin: "0" }}>Domains Recommended For You</div>
        <button className="btn-temp">Recommended</button>
      </div>

      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Domain Name</th>
            <th>Single Domain</th>
            <th>Subscription</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>newevoqins.xyz</td>
            <td>
              <a href="#" class="link-primary">
                Add to Cart
              </a>{" "}
              at ₹5000
            </td>
            <td className="striked-price">
              <del>₹5000</del>
              <span>
                <span>₹499</span>/year with subscription
              </span>
            </td>
            <td>
              <button className="btn btn-primary">Subscribe</button>
            </td>
          </tr>
          <tr>
            <td>newevoqins.co.in</td>
            <td>
              <a href="#" class="link-primary">
                Add to Cart
              </a>{" "}
              at ₹5000
            </td>
            <td className="striked-price">
              <del>₹5000</del>
              <span>
                <span>₹499</span>/year with subscription
              </span>
            </td>
            <td>
              <button className="btn btn-primary">Subscribe</button>
            </td>
          </tr>
          <tr>
            <td>newevoqins.com</td>
            <td>
              <a href="#" class="link-primary">
                Add to Cart
              </a>{" "}
              at ₹5000
            </td>
            <td className="striked-price">
              <del>₹5000</del>
              <span>
                <span>₹499</span>/year with subscription
              </span>
            </td>
            <td>
              <button className="btn btn-primary">Subscribe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
