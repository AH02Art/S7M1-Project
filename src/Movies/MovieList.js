import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function MovieList(props) {
  const navigate = useNavigate()
  const click = id => () => {
    navigate(`movies/${id}`);
  };
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails 
          link={<Link to={`movies/${movie.id}`}>details</Link>} 
          click={click(movie.id)} 
          key={movie.id} 
          movie={movie} 
        />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { click, link } = props

  return (
    <div className="movie-card" onClick={click}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {link}
    </div>
  );
}