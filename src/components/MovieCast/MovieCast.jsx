import { useEffect, useState } from 'react';
import { fetchFilmById } from '../../services/api';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieCastItem from '../MovieCastItem/MovieCastItem';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true);
        setCredits([]);
        const data = await fetchFilmById(movieId, '/credits');
        setCredits(data.cast);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {credits && (
        <ul className={s.list}>
          {credits.map(credit => (
            <li key={credit.id} className={s.item}>
              <MovieCastItem data={credit} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
