import React, { useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=4b612ce70715e0bb1694010b6de229c9&language=en-US"

      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch top rated movies", error);
    }
  };

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <button onClick={fetchTopRatedMovies}>Get Top Rated Movies</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} style={{ marginBottom: "20px" }}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
