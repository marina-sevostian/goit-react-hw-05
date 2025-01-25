import s from './SearchBar.module.css';

const SearchBar = ({ setQuery }) => {
  const handleSumbmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      return;
    }
    setQuery(query);
    form.reset();
  };
  return (
    <header>
      <form className={s.form} onSubmit={handleSumbmit}>
        <input
          className={s.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
