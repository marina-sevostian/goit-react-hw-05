import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';
import MovieItem from '../MovieItem/MovieItem';

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {films.map(film => (
        <li key={film.id} className={s.item}>
          <Link
            to={`/movies/${film.id}`}
            className={s.itemLink}
            state={location}
          >
            <MovieItem data={film} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
