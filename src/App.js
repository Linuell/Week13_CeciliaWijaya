import React, { useState, useEffect } from "react";

function App() {
  const [genres, setGenres] = useState([]);

  function getGenresWithAxios() {
    get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=4b612ce70715e0bb1694010b6de229c9&language=en-US"
    )
      .then((response) => {
        console.log(response.data.genres);
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
  }

  return (
    <div>
      <h1>Movie Genres</h1>
      <button onClick={getGenresWithAxios}>Get All Genre with Axios</button>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            {genre.id} - {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
