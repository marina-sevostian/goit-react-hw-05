import { useEffect, useState, useRef, Suspense } from 'react';
import { fetchFilmById } from '../../services/api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import {
  Link,
  NavLink,
  useLocation,
  useParams,
  Outlet,
} from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true);
        const data = await fetchFilmById(movieId);
        setFilm(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const urlImage = film?.poster_path
    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
    : 'https://via.placeholder.com/350x500?text=No+Image';

  const voteAverage = Number(film?.vote_average).toFixed(2);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.subtitle, isActive && s.active);
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.linkWrap}>
          <Link to={goBackRef.current} className={s.linkGoBack}>
            Go back
          </Link>
        </div>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        {film && (
          <div>
            <div className={s.detailsWrap}>
              <img src={urlImage} alt={film.title} width="350" height="500" />
              <div>
                <h2 className={s.heading}>{film.title}</h2>
                <div className={s.textWrap}>
                  <h3 className={s.subtitle}>Overviews:</h3>
                  <p className={s.text}>{film.overview}</p>
                </div>
                <div className={s.textWrap}>
                  <h3 className={s.subtitle}>Relase data:</h3>
                  <p className={s.text}>{film.release_date}</p>
                </div>
                <div className={s.textWrap}>
                  <h3 className={s.subtitle}>Genres:</h3>
                  <ul className={s.list}>
                    {film.genres.map(gerne => (
                      <li className={s.text} key={gerne.id}>
                        {gerne.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={s.textWrap}>
                  <h3 className={s.subtitle}>Runtime:</h3>
                  <p className={s.text}>{film.runtime} minutes</p>
                </div>
                <div className={s.textWrap}>
                  <h3 className={s.subtitle}>Production countries:</h3>
                  <ul className={s.list}>
                    {film.production_countries.map(country => (
                      <li className={s.text} key={country.iso_3166_1}>
                        {country.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={s.textWrap}>
                  <h3 className={s.subtitle}>Rating</h3>
                  <p className={s.text}>{voteAverage}</p>
                </div>
              </div>
            </div>
            <nav className={s.navDetails}>
              <NavLink to="cast" className={buildLinkClass}>
                Cast
              </NavLink>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </nav>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetailsPage;
