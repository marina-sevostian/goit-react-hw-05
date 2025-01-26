import SearchBar from '../../components/SearchBar/SearchBar';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <div className={s.container}>
      <SearchBar />
      <button className={s.btn}>Next</button>
    </div>
  );
};

export default MoviesPage;
