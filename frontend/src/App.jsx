import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardList from './components/CardList';
import Footer from './components/Footer';
import AddCard from './components/AddCard';
import axios from 'axios';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [showAddCard, setShowAddCard] = useState(false);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    axios.get('http://localhost:3000/cards')
      .then(response => {
        setCards(response.data);
        setFilteredCards(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the cards!", error);
      });
  };

  const handleSearch = (searchTerm) => {
    const filtered = cards.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  const handleAddCard = (newCard) => {
    axios.post('http://localhost:3000/cards', newCard)
      .then(response => {
        setCards([...cards, response.data]);
        setFilteredCards([...cards, response.data]);
        setShowAddCard(false);
      })
      .catch(error => {
        console.error("There was an error adding the card!", error);
      });
  };

  const toggleAddCard = () => {
    setShowAddCard(!showAddCard);
  };

  return (
    <div className="App">
      <Navbar onAddCard={toggleAddCard} />
      <main className={`main-content ${showAddCard ? 'hidden' : ''}`}>
        <Hero onSearch={handleSearch} />
        <CardList cards={filteredCards} />
      </main>
      {showAddCard && (
        <div className="add-card-wrapper">
          <AddCard onAdd={handleAddCard} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
