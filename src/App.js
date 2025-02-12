import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Hero from './components/Hero';
import heroImg from './components/new.jpg';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsCount, setResultsCount] = useState(0);

  const tags = ['yoga', 'weekend', 'meditation', 'detox'];
  const years = ['2022', '2023', '2024', '2025', '2026'];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/retreats');
      setRetreats(response.data);
      setFilteredRetreats(response.data);
      setResultsCount(response.data.length);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let results = retreats;

    if (searchQuery) {
      results = results.filter(retreat => 
        retreat.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTag) {
      results = results.filter(retreat => retreat.tag.includes(selectedTag));
    }

    if (selectedYear) {
      results = results.filter(retreat => new Date(retreat.date * 1000).getFullYear().toString() === selectedYear);
    }

    setResultsCount(results.length);
    setFilteredRetreats(results.slice((currentPage - 1) * 3, currentPage * 3));
  }, [selectedTag, selectedYear, searchQuery, currentPage, retreats]);

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
    setCurrentPage(1);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Wellness Retreats</h1>
      </header>
      
      <Hero
        cName="hero"
        heroImg={heroImg}
        
      />
      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery} 
          onChange={handleSearch} 
          className="search-bar"
        />
        <div className="filter">
          <label htmlFor="tag">Tag:</label>
          <select id="tag" onChange={handleTagChange} value={selectedTag}>
            <option value="">Select a tag</option>
            {tags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="year">Year:</label>
          <select id="year" onChange={handleYearChange} value={selectedYear}>
            <option value="">Select a year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="results-count">
          {resultsCount} results found
        </div>
      </div>
      <div className="cards-container">
        {filteredRetreats.map(retreat => (
          <div key={retreat.id} className="card">
            <img src={retreat.image} alt={retreat.title} />
            <div className="card-content">
              <h3>{retreat.title}</h3>
              <p>{retreat.description}</p>
              <p><strong>Date:</strong> {new Date(retreat.date * 1000).toDateString()}</p>
              <p><strong>Location:</strong> {retreat.location}</p>
              <p><strong>Price:</strong> ${retreat.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={filteredRetreats.length < 3}
          className="pagination-button"
        >
          Next
        </button>
      </div>
      <footer className="footer">
        &copy; 2024 Wellness Retreats
      </footer>
    </div>
  );
};

export default App;
