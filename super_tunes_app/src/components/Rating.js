import React from "react";

const Rating = ({ value }) => {
  return (
    <div className="rating">
      {[...Array(value)].map((_, index) => (
        <div key={index} className="star"></div>
      ))}
    </div>
  );
};

export default Rating;
