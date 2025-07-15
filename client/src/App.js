import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGVtbyIsImlhdCI6MTc1MjU2MTg3OCwiZXhwIjoxNzUyNTY5MDc4fQ.JZFvtEEOTELA6t13cq8_IU0vmhYwLNSrGL6I36ku9KM';

function App() {
  const [term, setTerm] = useState('');
  const [media, setMedia] = useState('all');
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // Perform search using backend API
  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/search', {
        headers: { Authorization: token },
        params: { term, media },
      });
      setResults(response.data.results);
    } catch (err) {
      console.error(err);
      alert('Search failed. Is the backend running?');
    }
  };

  const toggleFavourite = (item) => {
    const exists = favourites.find(fav => fav.trackId === item.trackId);
    if (exists) {
      setFavourites(favourites.filter(fav => fav.trackId !== item.trackId));
    } else {
      setFavourites([...favourites, item]);
    }
  };

  return (
    <div className="App">
      <h1>iTunes Search App</h1>
      <div>
        <input
          placeholder="Search iTunes..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <select value={media} onChange={(e) => setMedia(e.target.value)}>
          <option value="all">All</option>
          <option value="music">Music</option>
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
          <option value="software">Software</option>
          <option value="ebook">eBook</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      <h2>Results</h2>
      <div className="results">
        {results.map(item => (
          <div className="card" key={item.trackId}>
            <img src={item.artworkUrl100} alt={item.trackName} />
            <h4>{item.trackName || item.collectionName}</h4>
            <p>{item.artistName}</p>
            <button onClick={() => toggleFavourite(item)}>
              {favourites.find(fav => fav.trackId === item.trackId)
                ? 'Remove from Favourites'
                : 'Add to Favourites'}
            </button>
          </div>
        ))}
      </div>

      <h2>Favourites</h2>
      <ul>
        {favourites.map(item => (
          <li key={item.trackId}>{item.trackName || item.collectionName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
