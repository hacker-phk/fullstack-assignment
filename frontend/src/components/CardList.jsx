import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))
      ) : (
        <div className="no-cards-message">
          No help cards available. Please add some to get started.
        </div>
      )}
    </div>
  );
};

export default CardList;
