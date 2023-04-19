import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}

export default MovieDetails;
