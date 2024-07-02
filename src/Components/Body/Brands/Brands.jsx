/* eslint-disable react/prop-types */
import "./brand.css";

function Brands({ brandData }) {
  return (
    <div className="brand-card">
      <div className="brandItem">
        <div className="brandContent">{brandData.text}</div>
      </div>
    </div>
  );
}

export default Brands;
