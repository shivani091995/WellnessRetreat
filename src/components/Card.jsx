import React from 'react';


const Card = ({ retreat }) => {
  const date = new Date(retreat.date * 1000).toLocaleDateString();
  
  return (
    <div className="card">
      <img src={retreat.image} alt={retreat.title} className="card-img" />
      <div className="card-content">
        <div className="card-header">
          <h3>{retreat.title}</h3>
          <p>{retreat.description}</p>
        </div>
        <div className="card-footer">
          <div>
            <p>Date: {date}</p>
            <p>Location: {retreat.location}</p>
          </div>
          <div>
            <p>Price: ${retreat.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
