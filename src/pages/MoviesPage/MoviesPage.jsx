import { useEffect, useState } from 'react';
import { fetchFilmSearch } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import s from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFilmSearch(query, page);
        const searchFilm = data.results;
        setFilms(prev => [...prev, ...searchFilm]);
        const totalPagesData = data.total_pages;
        setTotalPages(totalPagesData);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeQuery = newQuery => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
    setFilms([]);
    setPage(1);
  };
  const handleNextPage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className={s.container}>
      <SearchBar setQuery={handleChangeQuery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {films.length > 0 && <MovieList films={films} />}
      {films.length > 0 && page < totalPages && (
        <button className={s.btn} onClick={handleNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default MoviesPage;
