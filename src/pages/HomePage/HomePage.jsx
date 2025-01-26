import { useEffect, useState } from 'react';
import { fetchFilm } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';
const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setFilms([]);
        setIsError(false);
        setIsLoading(true);
        const data = await fetchFilm();
        setFilms(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Trending today</h2>
      {isLoading && <Loader />}
      {films?.length > 0 && <MovieList films={films} />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default HomePage;
