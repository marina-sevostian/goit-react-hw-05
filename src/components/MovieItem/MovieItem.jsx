import s from './MovieItem.module.css';
const MovieItem = ({
  data: { poster_path, title, vote_average, release_date },
}) => {
  const urlImage = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/350x500?text=No+Image';
  const voteAverage = Number(vote_average).toFixed(2);
  const relaseYear = release_date.slice(0, 4);

  return (
    <div className={s.card}>
      <img src={urlImage} alt={title} width="350" height="500" />
      <div className={s.textWrap}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>Relase data: {relaseYear}</p>
        <p className={s.text}>Rating: {voteAverage}</p>
      </div>
    </div>
  );
};

export default MovieItem;
