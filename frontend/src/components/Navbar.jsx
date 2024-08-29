import React from 'react';
import './Navbar.css';
import AddCard from './AddCard'; // Import the AddCard component

const Navbar = ({ onAddCard }) => {
  const [showAddCard, setShowAddCard] = React.useState(false);

  const handleQueryClick = () => {
    setShowAddCard(!showAddCard);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-left">
            <h1>Help Center</h1>
          </div>
          <div className="navbar-right">
            <button className="submit-query-button" onClick={handleQueryClick}>
              Submit Query
            </button>
          </div>
        </div>
      </nav>

      {showAddCard && (
        <div className="add-card-container">
          <AddCard onAdd={onAddCard} />
        </div>
      )}
    </>
  );
};

export default Navbar;
